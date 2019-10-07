import "reflect-metadata";
import App from "./app";
import { registerEnumType } from "type-graphql";
import { ValueType } from "./enums/value-type"

registerEnumType(ValueType, {
  name: "ValueType", // this one is mandatory
  description: "Scraping Rule value types", // this one is optional
});


const PORT = 4000;

new App().start(PORT);
