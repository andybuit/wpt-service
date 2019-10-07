import { prop as Property, arrayProp as ArrayProperty,Typegoose } from "typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
import { Rule } from "./rule";

@ObjectType()
export class Website extends Typegoose {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true, unique: true })
  url: string;

  @Field(type => [Rule])
  @ArrayProperty({items: Rule, default: []})
  rules: Rule[];

}
export const WebsiteModel = new Website().getModelForClass(Website);
