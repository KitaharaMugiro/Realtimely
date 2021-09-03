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
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var utilities_1 = require("@apollo/client/utilities");
var aws_appsync_auth_link_1 = require("aws-appsync-auth-link");
var aws_appsync_subscription_link_1 = require("aws-appsync-subscription-link");
// ライブラリ化するとなるとここの部分が一気に難易度上がる・・
//もうちょっとまとめる
var API_KEY = "da2-gppg3vvan5f7phpprzhs4zqucu";
var authInfo = {
    type: "API_KEY",
    apiKey: API_KEY
};
var wssUrl = 'wss://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql';
var wsLink = process.browser ? client_1.ApolloLink.from([
    (0, aws_appsync_auth_link_1.createAuthLink)({ url: wssUrl, region: "ap-northeast-1", auth: authInfo }),
    (0, aws_appsync_subscription_link_1.createSubscriptionHandshakeLink)({ url: wssUrl, region: "ap-northeast-1", auth: authInfo })
]) : null;
var httpLink = new client_1.HttpLink({
    uri: 'https://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql'
});
// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
var splitLink = wsLink ? (0, client_1.split)(function (_a) {
    var query = _a.query;
    var definition = (0, utilities_1.getMainDefinition)(query);
    return (definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription');
}, wsLink, httpLink) : httpLink;
var authLink = (0, context_1.setContext)(function (_, _a) {
    var headers = _a.headers;
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: __assign(__assign({}, headers), { "x-api-key": API_KEY })
    };
});
var MyApolloClient = new client_1.ApolloClient({
    link: authLink.concat(splitLink),
    headers: { "x-api-key": API_KEY },
    cache: new client_1.InMemoryCache(),
});
exports.default = MyApolloClient;
//# sourceMappingURL=MyApolloClient.js.map