
import { useEffect, useState } from "react";
import { onCreateUserActionResponse } from "../api/gql/onCreateUserActionGql";
import useCreateUserAction from "../api/gqlFunctions/useCreateUserAction";
import useOnCreateUserAction from "../api/gqlFunctions/useOnCreateUserAction";
import { RealtimeUserAction } from "../models/RealtimeUserAction";
import User from "../models/User";
import { updateArray } from "./clientCommonUtils";

const convertResponseToModel = (response: onCreateUserActionResponse): RealtimeUserAction | undefined => {
    if (!response) return undefined
    return { ...response, key: response.SK }
}

export default (callback?: (actionId: string, value: string, userInfo?: { name: string, color: string, avator: string }) => void) => {

    /* URL取得 */
    if (typeof window === "undefined") return {
        loading: true,
        pushUserAction: (args: any) => { },
        createdUserAction: (args: any) => { },
        userActionList: new Array<RealtimeUserAction>()
    }

    const host = window.location.host
    const path = window.location.pathname
    const url = host + path

    /* create mutation */
    const createUserAction = useCreateUserAction()

    /* subscription */
    const _createdAction = useOnCreateUserAction(url)

    /* 返り値定義 */
    const createdUserAction = convertResponseToModel(_createdAction)

    /* 返り値定義 */
    const [userActionList, setUserActionList] = useState<RealtimeUserAction[]>([])

    /* pushメソッド定義 */
    const pushUserAction = (actionId: string, value: string) => {
        const user = new User()
        createUserAction(url, user.userId, actionId, value, user.name, user.avator, user.color)
    }

    /* callbackの実行 */
    useEffect(() => {
        if (!createdUserAction) {
            return
        }
        const actionId = createdUserAction.actionId
        const value = createdUserAction.value
        const userInfo = {
            avator: createdUserAction.avator,
            name: createdUserAction.name,
            color: createdUserAction.color

        }
        if (callback) {
            callback(actionId, value, userInfo)
        }
    }, [_createdAction]) //createdUserActionだと無限ループになるっぽい？

    /* UserActionが追加/更新した際の処理 */
    useEffect(() => {
        if (!createdUserAction) {
            return
        }
        const updatedUserActionList = updateArray(userActionList, createdUserAction)
        setUserActionList(updatedUserActionList)
    }, [_createdAction])

    return { pushUserAction, createdUserAction, userActionList }
}