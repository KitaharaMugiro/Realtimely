"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useCreateRealtimeCursor_1 = __importDefault(require("../api/gqlFunctions/useCreateRealtimeCursor"));
var useOnCreateRealtimeCursor_1 = __importDefault(require("../api/gqlFunctions/useOnCreateRealtimeCursor"));
var CursorAnimate_1 = require("../components/CursorAnimate");
var User_1 = __importDefault(require("../models/User"));
var clientCommonUtils_1 = require("./clientCommonUtils");
var convertResponseToModel = function (response) {
    if (!response)
        return undefined;
    return __assign(__assign({}, response), { key: response.SK });
};
exports.default = (function () {
    /* 定数 */
    var POKE_INTERVAL_MILLISEC = 500;
    /* URL取得 */
    if (typeof window === "undefined")
        return {
            loading: true,
            onMouseMove: function (args) { },
            renderCursors: function () { return react_1.default.createElement("div", null); }
        };
    var host = window.location.host;
    var path = window.location.pathname;
    var url = host + path;
    /** setTimeoutの制御変数 */
    var _a = (0, react_1.useState)(0), time = _a[0], setTime = _a[1];
    /**カーソル位置 */
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), yourCursorPosition = _b[0], setYourCursorPosition = _b[1];
    /**他ユーザを含めた全てのカーソルリスト */
    var _c = (0, react_1.useState)([]), cursorList = _c[0], setCursorList = _c[1];
    /**create mutation */
    var createRealtimeCursor = (0, useCreateRealtimeCursor_1.default)();
    /**Subscription */
    var _createdCursor = (0, useOnCreateRealtimeCursor_1.default)(url);
    var createdCursor = convertResponseToModel(_createdCursor);
    /* pushメソッド定義 */
    var pushRealtimeCursor = function (x, y) {
        var user = new User_1.default();
        createRealtimeCursor(url, user.userId, x, y, user.name, user.avator, user.color);
    };
    /**マウスの動作のたびに実行 */
    var onMouseMove = function (e) {
        setYourCursorPosition({ x: e.clientX, y: e.clientY });
    };
    /**定期的なPoke */
    (0, react_1.useEffect)(function () {
        //setIntervalだとstateにアクセスできなかった
        var timer = setTimeout(function () {
            setTime(time + 1);
            if (!yourCursorPosition.x)
                return;
            if (!yourCursorPosition.y)
                return;
            pushRealtimeCursor(yourCursorPosition.x, yourCursorPosition.y);
        }, POKE_INTERVAL_MILLISEC);
        return function () {
            clearTimeout(timer);
        };
    }, [time]);
    /**Subscriptionで更新/追加があった場合の処理 */
    (0, react_1.useEffect)(function () {
        if (!createdCursor) {
            return;
        }
        var newDisplayCursorList = (0, clientCommonUtils_1.updateArray)(cursorList, createdCursor);
        setCursorList(newDisplayCursorList);
    }, [_createdCursor]); //createdCursorを監視したら無限ループになる
    var renderCursors = function (customView) {
        return cursorList.map(function (c) {
            return (react_1.default.createElement(CursorAnimate_1.CursorAnimate, { key: c.key, curPos: { x: c.x, y: c.y }, userInfo: { name: c.name, avatar: c.avator, color: c.color }, customView: customView }));
        });
    };
    return { onMouseMove: onMouseMove, renderCursors: renderCursors };
});
//# sourceMappingURL=useRealtimeCursor.js.map