"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
exports.default = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            mutation MyMutation($url: String!, $userId: String!, $name:String, $avator: String, $color: String) {\n                createRealtimeUser(input: {PK: $url, SK: $userId, name: $name, avator: $avator, color: $color}) {\n                    PK\n                    SK\n                    avator\n                    color\n                    name\n                    updatedAt\n                    deleteTime\n            }          \n        }\n        "], ["\n            mutation MyMutation($url: String!, $userId: String!, $name:String, $avator: String, $color: String) {\n                createRealtimeUser(input: {PK: $url, SK: $userId, name: $name, avator: $avator, color: $color}) {\n                    PK\n                    SK\n                    avator\n                    color\n                    name\n                    updatedAt\n                    deleteTime\n            }          \n        }\n        "])));
var templateObject_1;
//# sourceMappingURL=createRealtimeUserGql.js.map