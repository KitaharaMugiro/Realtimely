"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorAnimate = void 0;
var react_1 = __importDefault(require("react"));
var Cursor_1 = require("./Cursor");
var CursorAnimate = function (props) {
    var curPos = props.curPos;
    var userInfo = props.userInfo;
    var view = function () {
        if (props.customView) {
            return props.customView({ userInfo: userInfo });
        }
        else {
            return react_1.default.createElement(Cursor_1.Cursor, { userInfo: userInfo });
        }
    };
    return (react_1.default.createElement("div", { className: "realtimely_cursor", style: {
            position: "absolute",
            fontFamily: '"Inter", sans-serif',
            fontSize: "11px",
            fontWeight: 400,
            lineHeight: "1em",
            cursor: "pointer",
            left: 0,
            top: 0,
            transform: "translateX(" + curPos.x + "px) translateY(" + curPos.y + "px)",
            transition: "transform 1s"
        } }, view()));
};
exports.CursorAnimate = CursorAnimate;
//# sourceMappingURL=CursorAnimate.js.map