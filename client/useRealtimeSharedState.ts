
import { useEffect, useState } from "react";
import getRealtimeSharedStateGql from "../api/gql/getRealtimeSharedStateGql";
import { getRealtimeSharedState } from "../api/gqlFunctions/getRealtimeSharedState";
import useCreateRealtimeSharedState from "../api/gqlFunctions/useCreateRealtimeSharedState";
import useOnCreateRealtimeSharedState from "../api/gqlFunctions/useOnCreateRealtimeSharedState";


export default <T>(defaultValue: T, actionId: string): [T, (value: T) => void] => {

    /* URL取得 */
    if (typeof window === "undefined") return [defaultValue, (value: T) => null]


    const host = window.location.host
    const path = window.location.pathname
    const url = host + path

    /* create mutation */
    const createRealtimeSharedState = useCreateRealtimeSharedState()

    /* subscription */
    const createdRealtimeSharedState = useOnCreateRealtimeSharedState(url, actionId)

    /* 返り値定義 */
    const [value, setValue] = useState<T>(defaultValue)

    /* pushメソッド定義 */
    const pushValue = (value: T) => {
        createRealtimeSharedState(url, actionId, JSON.stringify(value))
    }

    const _deleteKeysWhichIsNotIncludedInDefaultValue = (_value: any) => {
        const keys = Object.keys(defaultValue)
        if (!keys) return _value
        let newObject: any = {}
        for (const key of keys) {
            newObject[key] = _value[key]
        }
        return newObject

    }

    /* 初期データの取得 */
    useEffect(() => {
        const getInitialSharedState = async () => {
            const initialSharedState = await getRealtimeSharedState(url, actionId)
            if (!initialSharedState) {
                pushValue(defaultValue)
                setValue(defaultValue)
                return
            }
            const _actionId = initialSharedState.actionId
            if (_actionId !== actionId) return
            const __value = JSON.parse(initialSharedState.value)
            const _value = _deleteKeysWhichIsNotIncludedInDefaultValue(__value)
            setValue(_value as T)
        }

        getInitialSharedState()
    }, [])


    /* callbackの実行 */
    useEffect(() => {
        if (!createdRealtimeSharedState) {
            return
        }
        const _actionId = createdRealtimeSharedState.actionId
        if (_actionId !== actionId) return
        const __value = JSON.parse(createdRealtimeSharedState.value)
        const _value = _deleteKeysWhichIsNotIncludedInDefaultValue(__value)
        setValue(_value as T)
    }, [createdRealtimeSharedState])


    return [value, pushValue]
}