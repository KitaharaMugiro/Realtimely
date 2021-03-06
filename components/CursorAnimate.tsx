import { relayStylePagination } from "@apollo/client/utilities";
import React from "react";
import { Cursor } from "./Cursor";
type CurPos = {
    x: number, y: number
}

type UserInfo = {
    color: string, avatar: string, name: string
}

export type CustomCursorViewParameter = {
    userInfo: UserInfo
    customInfo: string
}

interface Props {
    curPos: CurPos
    userInfo: UserInfo
    customInfo?: string
    customView?: (viewParameter: CustomCursorViewParameter) => JSX.Element
}

const CursorAnimate = (props: Props) => {
    const curPos = props.curPos
    const userInfo = props.userInfo
    const customInfo = props.customInfo || ""

    const view = () => {
        if (props.customView) {
            return props.customView({ userInfo, customInfo })
        } else {
            return <Cursor userInfo={userInfo} />
        }
    }

    return (

        <div
            className="realtimely_cursor"
            style={{
                position: "absolute",
                fontFamily: '"Inter", sans-serif',
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: "1em",
                left: 0,
                top: 0,
                transform: `translateX(${curPos.x}px) translateY(${curPos.y}px)`,
                transition: "transform 0.7s"
            }}
        >
            {view()}
        </div>
    )

}

export { CursorAnimate };
