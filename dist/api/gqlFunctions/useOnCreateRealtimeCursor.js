"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var onCreateRealtimeCursorGql_1 = __importDefault(require("../gql/onCreateRealtimeCursorGql"));
var MyApolloClient_1 = __importDefault(require("../MyApolloClient"));
exports.default = (function (url) {
    var _a;
    var response = (0, client_1.useSubscription)(onCreateRealtimeCursorGql_1.default, { variables: { url: "URL#" + url }, client: MyApolloClient_1.default });
    var createdRealtimeCursor = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.onCreateRealtimeCursor;
    return createdRealtimeCursor;
});
//# sourceMappingURL=useOnCreateRealtimeCursor.js.map