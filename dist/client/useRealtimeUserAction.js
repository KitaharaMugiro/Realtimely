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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCreateUserAction_1 = __importDefault(require("../api/gqlFunctions/useCreateUserAction"));
var useOnCreateUserAction_1 = __importDefault(require("../api/gqlFunctions/useOnCreateUserAction"));
var User_1 = __importDefault(require("../models/User"));
var clientCommonUtils_1 = require("./clientCommonUtils");
var convertResponseToModel = function (response) {
    if (!response)
        return undefined;
    return __assign(__assign({}, response), { key: response.SK });
};
exports.default = (function (callback) {
    /* URL取得 */
    if (typeof window === "undefined")
        return {
            loading: true,
            pushUserAction: function (args) { },
            createdUserAction: function (args) { },
            userActionList: new Array()
        };
    var host = window.location.host;
    var path = window.location.pathname;
    var url = host + path;
    /* create mutation */
    var createUserAction = (0, useCreateUserAction_1.default)();
    /* subscription */
    var _createdAction = (0, useOnCreateUserAction_1.default)(url);
    /* 返り値定義 */
    var createdUserAction = convertResponseToModel(_createdAction);
    /* 返り値定義 */
    var _a = (0, react_1.useState)([]), userActionList = _a[0], setUserActionList = _a[1];
    /* pushメソッド定義 */
    var pushUserAction = function (actionId, value) {
        var user = new User_1.default();
        createUserAction(url, user.userId, actionId, value, user.name, user.avator, user.color);
    };
    /* callbackの実行 */
    (0, react_1.useEffect)(function () {
        if (!createdUserAction) {
            return;
        }
        var actionId = createdUserAction.actionId;
        var value = createdUserAction.value;
        var userInfo = {
            avator: createdUserAction.avator,
            name: createdUserAction.name,
            color: createdUserAction.color
        };
        if (callback) {
            callback(actionId, value, userInfo);
        }
    }, [_createdAction]); //createdUserActionだと無限ループになるっぽい？
    /* UserActionが追加/更新した際の処理 */
    (0, react_1.useEffect)(function () {
        if (!createdUserAction) {
            return;
        }
        var updatedUserActionList = (0, clientCommonUtils_1.updateArray)(userActionList, createdUserAction);
        setUserActionList(updatedUserActionList);
    }, [_createdAction]);
    return { pushUserAction: pushUserAction, createdUserAction: createdUserAction, userActionList: userActionList };
});
//# sourceMappingURL=useRealtimeUserAction.js.map