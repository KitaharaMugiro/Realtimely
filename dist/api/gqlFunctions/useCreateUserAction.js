"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var createUserActionGql_1 = __importDefault(require("../gql/createUserActionGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
exports.default = (function () {
    var createUserAction = (0, client_1.useMutation)(createUserActionGql_1.default, { client: MyApolloClient_1.default })[0];
    return function (url, userId, actionId, value, name, avator, color) {
        var actionIdAndUserId = "ActionId#" + actionId + "UserId#" + userId;
        createUserAction({
            variables: {
                url: "URL#" + url,
                actionIdAndUserId: actionIdAndUserId,
                actionId: actionId,
                value: value,
                name: name,
                avator: avator,
                color: color
            }
        });
    };
});
//# sourceMappingURL=useCreateUserAction.js.map