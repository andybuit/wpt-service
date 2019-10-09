import { Field, InputType } from "type-graphql";
import { ValueType } from "../../enums/value-type";
import { Rule } from "../../entities/rule";

@InputType()
export class RuleInput implements Partial<Rule>{
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(type => ValueType)
  valueType: ValueType;
}
