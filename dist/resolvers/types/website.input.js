"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const rule_input_1 = require("./rule.input");
let WebsiteInput = class WebsiteInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], WebsiteInput.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(type => [rule_input_1.RuleInput]),
    __metadata("design:type", Array)
], WebsiteInput.prototype, "rules", void 0);
WebsiteInput = __decorate([
    type_graphql_1.InputType()
], WebsiteInput);
exports.WebsiteInput = WebsiteInput;
//# sourceMappingURL=website.input.js.map