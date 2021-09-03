import React from "react";
import { CustomCursorViewParameter } from "../components/CursorAnimate";
declare const _default: () => {
    loading: boolean;
    onMouseMove: (args: any) => void;
    renderCursors: () => JSX.Element;
} | {
    onMouseMove: (e: React.MouseEvent<any, MouseEvent>) => void;
    renderCursors: (customView?: ((viewParameter: CustomCursorViewParameter) => JSX.Element) | undefined) => JSX.Element[];
    loading?: undefined;
};
export default _default;
