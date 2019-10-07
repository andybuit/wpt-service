import { Service } from "typedi";
import {
  Query,
  Arg,
  Int,
  Resolver,
  ArgsType,
  Field,
  Args,
  FieldResolver,
  Root,
  ClassType,
  Mutation,
  InputType,
} from "type-graphql";

import { ResourceService, ResourceServiceFactory } from "../services/resource.service";
import { Model } from "mongoose";
import { Typegoose, ModelType } from "typegoose";

@ArgsType()
export class GetAllArgs {
  @Field(type => Int)
  skip: number = 0;

  @Field(type => Int)
  take: number = 10;
}

export function ResourceResolver<T extends Typegoose, InputType>(
  ResourceCls: ClassType,
  RsourceModeCls: ModelType<T>
) {
  const resourceName = ResourceCls.name.toLocaleLowerCase();

  // `isAbstract` decorator option is mandatory to prevent multiple registering in schema
  @Resolver(of => ResourceCls, { isAbstract: true })
  @Service()
  abstract class ResourceResolverClass {
    protected resourceService: ResourceService<T>;

    constructor(factory: ResourceServiceFactory) {
      this.resourceService = factory.create(RsourceModeCls);
    }

    @Query(returns => ResourceCls, { name: `${resourceName}` })
    protected async getOne(@Arg("id") id: string) {
      return this.resourceService.getOne(id);
    }

    @Query(returns => [ResourceCls], { name: `${resourceName}s` })
    protected async getAll(@Args() { skip, take }: GetAllArgs) {
      const all = this.resourceService.getAll(skip, take);
      return all;
    }

    // @Mutation(returns => [ResourceCls], { name: `add${resourceName[0].toUpperCase() + resourceName.slice(1)}` })
    // protected async add(@Arg(`${resourceName}`) input: InputType) {
    //   const all = this.resourceService.save(new RsourceModeCls({...input}) as T);
    //   return all;
    // }

  }

  return ResourceResolverClass;
}