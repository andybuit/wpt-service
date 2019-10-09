import { prop as Property, arrayProp as ArrayProperty, getModelForClass, } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
import { Rule } from "./rule";

@ObjectType()
export class Page {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true, unique: true })
  url: string;

  @Field(type => [Rule])
  @ArrayProperty({ items: Rule, default: [] })
  rules: Rule[];

}
export const PageModel = getModelForClass(Page);
