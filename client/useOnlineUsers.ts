
import { useEffect, useState } from "react";
import { queryRealtimeUserResponse } from "../api/gql/queryRealtimeUserGql";
import { listRealtimeUser } from "../api/gqlFunctions/listRealtimeUsers";
import { useCreateRealtimeUser } from "../api/gqlFunctions/useCreateRealtimeUser";
import { useOnCreateRealtimeUser } from "../api/gqlFunctions/useOnCreateRealtimeUser";
import { OnlineUser } from "../models/OnlineUser";
import User from "../models/User";
import { filteringOutByDeletetime, updateArray } from "./clientCommonUtils";

const convertResponseToModel = (response: queryRealtimeUserResponse[0]): OnlineUser | undefined => {
    if (!response) return undefined
    return { ...response, key: response.SK }
}


export default (POKE_INTERVAL_MILLISEC: number = 5000) => {
    /* URL取得 */
    if (typeof window === "undefined") return { loading: true, onlineUserList: [] }
    const host = window.location.host
    const path = window.location.pathname
    const url = host + path

    /* 返り値定義 */
    const [onlineUserList, setOnlineUserList] = useState<OnlineUser[]>([])

    /* create mutation */
    const createRealtimeUser = useCreateRealtimeUser()

    /* subscription */
    const _createdUser = useOnCreateRealtimeUser(url)
    const createdUser = convertResponseToModel(_createdUser)


    /* 初期データの取得 */
    useEffect(() => {
        const getInitialOnlineUser = async () => {
            const initialOnlineUserList = await listRealtimeUser(url)
            const models = initialOnlineUserList.map(a => convertResponseToModel(a)!) //TODO: 強制unwrapはちょっと怖い
            const filteredModels = filteringOutByDeletetime(models)
            setOnlineUserList(filteredModels)
        }

        getInitialOnlineUser()
        const user = new User()
        createRealtimeUser(url, user.userId, user.name, user.avator, user.color)
    }, [])


    /* 定期的なpoke */
    useEffect(() => {
        setInterval(() => {
            const user = new User()
            createRealtimeUser(url, user.userId, user.name, user.avator, user.color)
        }, POKE_INTERVAL_MILLISEC)
    }, [])


    /* OnlineUserが追加/更新した際の処理 */
    useEffect(() => {
        if (!createdUser) {
            return
        }
        const newOnlineUserList = updateArray(onlineUserList, createdUser)
        const filteredModels = filteringOutByDeletetime(newOnlineUserList)
        setOnlineUserList(filteredModels)
    }, [_createdUser])

    return { onlineUserList }

}