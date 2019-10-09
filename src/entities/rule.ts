import { ObjectType, Field } from "type-graphql";
import { prop as Property, Ref } from "@typegoose/typegoose";
import { ValueType } from "../enums/value-type";

@ObjectType()
export class Rule {
  @Field()
  @Property({ required: true })
  name: string;

  @Field()
  @Property({required: true })
  path: string;

  @Field(type => ValueType)
  @Property({required: true, enum: ValueType })
  valueType: ValueType;
}
