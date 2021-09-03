"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var createRealtimeCursorGql_1 = __importDefault(require("../gql/createRealtimeCursorGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
exports.default = (function () {
    var createRealtimeCursor = (0, client_1.useMutation)(createRealtimeCursorGql_1.default, { client: MyApolloClient_1.default })[0];
    return function (url, userId, x, y, name, avator, color) {
        createRealtimeCursor({
            variables: {
                url: "URL#" + url, userId: "UserId#" + userId,
                x: x,
                y: y,
                name: name,
                avator: avator,
                color: color
            }
        });
    };
});
//# sourceMappingURL=useCreateRealtimeCursor.js.map