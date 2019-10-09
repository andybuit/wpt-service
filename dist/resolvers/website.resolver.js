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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const resource_resolver_1 = require("./resource.resolver");
const website_1 = require("../entities/website");
const website_input_1 = require("./types/website.input");
let WebsiteeResolver = class WebsiteeResolver extends resource_resolver_1.ResourceResolver(website_1.Website, website_1.WebsiteModel) {
    // here you can add resource-specific operations
    async add(input) {
        const all = this.resourceService.save(new website_1.WebsiteModel(Object.assign({}, input)));
        return all;
    }
};
__decorate([
    type_graphql_1.Mutation(returns => website_1.Website, { name: "addWebSite" }),
    __param(0, type_graphql_1.Arg("website")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [website_input_1.WebsiteInput]),
    __metadata("design:returntype", Promise)
], WebsiteeResolver.prototype, "add", null);
WebsiteeResolver = __decorate([
    type_graphql_1.Resolver(of => website_1.Website)
], WebsiteeResolver);
exports.WebsiteeResolver = WebsiteeResolver;
//# sourceMappingURL=website.resolver.js.map