"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var onCreateUserActionGql_1 = __importDefault(require("../gql/onCreateUserActionGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
exports.default = (function (url) {
    var _a;
    var response = (0, client_1.useSubscription)(onCreateUserActionGql_1.default, { variables: { url: "URL#" + url }, client: MyApolloClient_1.default });
    var createdUserAction = (_a = response.data) === null || _a === void 0 ? void 0 : _a.onCreateUserAction;
    return createdUserAction;
});
//# sourceMappingURL=useOnCreateUserAction.js.map