"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateRealtimeUser = void 0;
var client_1 = require("@apollo/client");
var createRealtimeUserGql_1 = __importDefault(require("../gql/createRealtimeUserGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
var useCreateRealtimeUser = function () {
    var createRealtimeUser = (0, client_1.useMutation)(createRealtimeUserGql_1.default, { client: MyApolloClient_1.default })[0];
    return function (url, userId, name, avator, color) {
        createRealtimeUser({
            variables: {
                url: "URL#" + url,
                userId: "UserId#" + userId,
                name: name,
                avator: avator,
                color: color
            }
        });
    };
};
exports.useCreateRealtimeUser = useCreateRealtimeUser;
//# sourceMappingURL=useCreateRealtimeUser.js.map