
import React, { useEffect, useState } from "react"
import { onCreateRealtimeCursorResponse } from "../api/gql/onCreateRealtimeCursorGql"
import useCreateRealtimeCursor from "../api/gqlFunctions/useCreateRealtimeCursor"
import useOnCreateRealtimeCursor from "../api/gqlFunctions/useOnCreateRealtimeCursor"
import { CursorAnimate, CustomCursorViewParameter } from "../components/CursorAnimate"
import { RealtimeCursor } from "../models/RealtimeCursor"
import User from "../models/User"
import { updateArray } from "./clientCommonUtils"

const convertResponseToModel = (response: onCreateRealtimeCursorResponse): RealtimeCursor | undefined => {
    if (!response) return undefined
    return { ...response, key: response.SK }
}


export default () => {
    /* 定数 */
    const POKE_INTERVAL_MILLISEC = 500

    /* URL取得 */
    if (typeof window === "undefined") return {
        loading: true,
        onMouseMove: (args: any) => { },
        renderCursors: () => { return <div /> }
    }
    const host = window.location.host
    const path = window.location.pathname
    const url = host + path

    /** setTimeoutの制御変数 */
    const [time, setTime] = useState(0)

    /**カーソル位置 */
    const [yourCursorPosition, setYourCursorPosition] = useState({ x: 0, y: 0 })

    /**他ユーザを含めた全てのカーソルリスト */
    const [cursorList, setCursorList] = useState<RealtimeCursor[]>([])

    /**create mutation */
    const createRealtimeCursor = useCreateRealtimeCursor()

    /**Subscription */
    const _createdCursor = useOnCreateRealtimeCursor(url)
    const createdCursor = convertResponseToModel(_createdCursor)

    /* pushメソッド定義 */
    const pushRealtimeCursor = (x: number, y: number) => {
        const user = new User()
        createRealtimeCursor(url, user.userId, x, y, user.name, user.avator, user.color)
    }

    /**マウスの動作のたびに実行 */
    const onMouseMove = (e: React.MouseEvent<any, MouseEvent>) => {
        setYourCursorPosition({ x: e.clientX, y: e.clientY });
    }

    /**定期的なPoke */
    useEffect(() => {
        //setIntervalだとstateにアクセスできなかった
        const timer = setTimeout(() => {
            setTime(time + 1);
            if (!yourCursorPosition.x) return
            if (!yourCursorPosition.y) return
            pushRealtimeCursor(yourCursorPosition.x, yourCursorPosition.y)
        }, POKE_INTERVAL_MILLISEC);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    /**Subscriptionで更新/追加があった場合の処理 */
    useEffect(() => {
        if (!createdCursor) {
            return
        }
        const newDisplayCursorList = updateArray(cursorList, createdCursor)
        setCursorList(newDisplayCursorList)
    }, [_createdCursor]) //createdCursorを監視したら無限ループになる

    const renderCursors = (customView?: (viewParameter: CustomCursorViewParameter) => JSX.Element) => {
        return cursorList.map(c => {

            return (
                <CursorAnimate
                    key={c.key}
                    curPos={{ x: c.x, y: c.y }}
                    userInfo={{ name: c.name, avatar: c.avator, color: c.color }}
                    customView={customView}
                />
            )
        })
    }

    return { onMouseMove, renderCursors }

}