"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
var react_1 = __importDefault(require("react"));
var Cursor = function (props) {
    var _a, _b;
    var userInfo = props.userInfo;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "realtimely_pointer", style: {
                display: "inline-block",
                transform: "rotate(-127deg)",
                fontSize: "16px",
                color: (_a = userInfo.color) !== null && _a !== void 0 ? _a : "gray",
                textAlign: "left"
            } }, "\u27A4"),
        react_1.default.createElement("div", { className: "realtimely_userinfo", style: {
                display: "block",
                margin: "4px 16px",
                padding: "5px",
                whiteSpace: "nowrap",
                backgroundColor: (_b = userInfo.color) !== null && _b !== void 0 ? _b : "gray",
                color: "white",
            } },
            userInfo.avatar,
            "\u00A0",
            userInfo.name)));
};
exports.Cursor = Cursor;
//# sourceMappingURL=Cursor.js.map