import { Website } from "../../entities/website";
import { RuleInput } from "./rule.input";
export declare class WebsiteInput implements Partial<Website> {
    url: string;
    rules: RuleInput[];
}
