import { InputType, Field } from "type-graphql";
import { Website } from "../../entities/website";
import { RuleInput } from "./rule.input";

@InputType()
export class WebsiteInput implements Partial<Website> {
  @Field()
  url: string;

  @Field(type => [RuleInput])
  rules: RuleInput[];
}
