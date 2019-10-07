import { Resolver, FieldResolver, Root, Mutation, Arg } from "type-graphql";

import { ResourceResolver } from "./resource.resolver";
import { Website, WebsiteModel } from "../entities/website";
import { WebsiteInput } from "./types/website.input";


@Resolver(of => Website)
export class WebsiteeResolver extends ResourceResolver<Website, WebsiteInput>(Website, WebsiteModel) {
    // here you can add resource-specific operations

    @Mutation(returns => Website, { name: "addWebSite" })
    protected async add(@Arg("website") input: WebsiteInput) {
        const all = this.resourceService.save(new WebsiteModel({ ...input }) as Website);
        return all;
    }
}