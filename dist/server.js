"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const type_graphql_1 = require("type-graphql");
const value_type_1 = require("./enums/value-type");
type_graphql_1.registerEnumType(value_type_1.ValueType, {
    name: "ValueType",
    description: "Scraping Rule value types",
});
const PORT = 4000;
new app_1.default().start(PORT);
//# sourceMappingURL=server.js.map