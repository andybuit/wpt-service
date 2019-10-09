import { prop as Property, Typegoose, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User extends Typegoose {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  email: string;

  @Field({ nullable: true })
  @Property()
  nickname?: string;

  @Property({ required: true })
  password: string;

  @Field({ nullable: true })
  @Property()
  emailVerified?: boolean;
}
export const UserModel = getModelForClass(User);
