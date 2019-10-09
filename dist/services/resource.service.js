"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
// we need to use factory as we need separate instance of service for each generic
let ResourceServiceFactory = class ResourceServiceFactory {
    create(RsourceModeCls) {
        return new ResourceService(RsourceModeCls);
    }
};
ResourceServiceFactory = __decorate([
    typedi_1.Service()
], ResourceServiceFactory);
exports.ResourceServiceFactory = ResourceServiceFactory;
class ResourceService {
    constructor(RsourceModeCls) {
        this.RsourceModeCls = RsourceModeCls;
    }
    async getOne(id) {
        return await this.RsourceModeCls.findById(id);
    }
    async getAll(skip, limit) {
        return await this.RsourceModeCls.find({}, null, { skip, limit });
    }
    async save(r) {
        return await this.RsourceModeCls.create(r);
    }
}
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map