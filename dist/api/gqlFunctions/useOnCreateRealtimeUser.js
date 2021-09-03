"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnCreateRealtimeUser = void 0;
var client_1 = require("@apollo/client");
var onCreateRealtimeUserGql_1 = __importDefault(require("../gql/onCreateRealtimeUserGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
var useOnCreateRealtimeUser = function (url) {
    var _a;
    var response = (0, client_1.useSubscription)(onCreateRealtimeUserGql_1.default, { variables: { url: "URL#" + url }, client: MyApolloClient_1.default });
    var createdRealtimeUser = (_a = response.data) === null || _a === void 0 ? void 0 : _a.onCreateRealtimeUser;
    return createdRealtimeUser;
};
exports.useOnCreateRealtimeUser = useOnCreateRealtimeUser;
//# sourceMappingURL=useOnCreateRealtimeUser.js.map