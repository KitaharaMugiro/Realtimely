/// <reference types="react" />
declare type CurPos = {
    x: number;
    y: number;
};
declare type UserInfo = {
    color: string;
    avatar: string;
    name: string;
};
export declare type CustomCursorViewParameter = {
    userInfo: UserInfo;
};
interface Props {
    curPos: CurPos;
    userInfo: UserInfo;
    customView?: (viewParameter: CustomCursorViewParameter) => JSX.Element;
}
declare const CursorAnimate: (props: Props) => JSX.Element;
export { CursorAnimate };
