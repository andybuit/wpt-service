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
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
const rule_1 = require("./rule");
let Website = class Website {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], Website.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Website.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(type => [rule_1.Rule]),
    typegoose_1.arrayProp({ items: rule_1.Rule, default: [] }),
    __metadata("design:type", Array)
], Website.prototype, "rules", void 0);
Website = __decorate([
    type_graphql_1.ObjectType()
], Website);
exports.Website = Website;
exports.WebsiteModel = typegoose_1.getModelForClass(Website);
//# sourceMappingURL=website.js.map