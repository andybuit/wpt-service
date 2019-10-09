import { Arg, Args, ArgsType, ClassType, Field, Int, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ResourceService, ResourceServiceFactory } from "../services/resource.service";
import { ModelType } from "@typegoose/typegoose/lib/types";


@ArgsType()
export class GetAllArgs {
  @Field(type => Int)
  skip: number = 0;

  @Field(type => Int)
  take: number = 10;
}

export function ResourceResolver<T, InputType>(
  ResourceCls: ClassType,
  RsourceModeCls: ModelType<T>
) {
  const resourceName = ResourceCls.name.toLocaleLowerCase();

  // `isAbstract` decorator option is mandatory to prevent multiple registering in schema
  @Service()
  @Resolver(of => ResourceCls, { isAbstract: true })
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