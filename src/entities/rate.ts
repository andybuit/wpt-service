import { ObjectType, Field, Int } from "type-graphql";
import { prop as Property, Ref, Typegoose } from "typegoose";

import { User } from "./user";

@ObjectType()
export class Rate {
  @Field(type => Int)
  @Property({ required: true })
  value: number;

  @Field()
  @Property({ default: new Date(), required: true })
  date: Date;

  @Field(type => User)
  @Property({ ref: User, required: true })
  user: Ref<User>;
}
