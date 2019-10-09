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
const typedi_1 = require("typedi");
const resource_service_1 = require("../services/resource.service");
let GetAllArgs = class GetAllArgs {
    constructor() {
        this.skip = 0;
        this.take = 10;
    }
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetAllArgs.prototype, "skip", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetAllArgs.prototype, "take", void 0);
GetAllArgs = __decorate([
    type_graphql_1.ArgsType()
], GetAllArgs);
exports.GetAllArgs = GetAllArgs;
function ResourceResolver(ResourceCls, RsourceModeCls) {
    const resourceName = ResourceCls.name.toLocaleLowerCase();
    // `isAbstract` decorator option is mandatory to prevent multiple registering in schema
    let ResourceResolverClass = class ResourceResolverClass {
        constructor(factory) {
            this.resourceService = factory.create(RsourceModeCls);
        }
        async getOne(id) {
            return this.resourceService.getOne(id);
        }
        async getAll({ skip, take }) {
            const all = this.resourceService.getAll(skip, take);
            return all;
        }
    };
    __decorate([
        type_graphql_1.Query(returns => ResourceCls, { name: `${resourceName}` }),
        __param(0, type_graphql_1.Arg("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ResourceResolverClass.prototype, "getOne", null);
    __decorate([
        type_graphql_1.Query(returns => [ResourceCls], { name: `${resourceName}s` }),
        __param(0, type_graphql_1.Args()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [GetAllArgs]),
        __metadata("design:returntype", Promise)
    ], ResourceResolverClass.prototype, "getAll", null);
    ResourceResolverClass = __decorate([
        typedi_1.Service(),
        type_graphql_1.Resolver(of => ResourceCls, { isAbstract: true }),
        __metadata("design:paramtypes", [resource_service_1.ResourceServiceFactory])
    ], ResourceResolverClass);
    return ResourceResolverClass;
}
exports.ResourceResolver = ResourceResolver;
//# sourceMappingURL=resource.resolver.js.map