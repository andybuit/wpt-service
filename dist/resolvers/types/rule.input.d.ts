import { ValueType } from "../../enums/value-type";
import { Rule } from "entities/rule";
export declare class RuleInput implements Partial<Rule> {
    name: string;
    path: string;
    valueType: ValueType;
}
