"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const type_graphql_1 = require("type-graphql");
const typegoose_middleware_1 = require("./typegoose-middleware");
const mongodb_1 = require("mongodb");
const object_id_scalar_1 = require("./object-id.scalar");
const scraper_1 = require("./scraping/scraper");
const scheduler_1 = __importDefault(require("./scraping/scheduler"));
const typedi_1 = require("typedi");
const website_resolver_1 = require("./resolvers/website.resolver");
class App {
    constructor() {
        this.app = express_1.default();
        this.scheduler = new scheduler_1.default();
        this.mongoUrl = "mongodb+srv://suianbu:Bsa770111@cluster0-m5knr.mongodb.net/wtp?retryWrites=true&w=majority";
        this.apolloServerSetup();
        this.config();
        this.mongoSetup();
        // this.schedule();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    schedule() {
        this.scheduler.addJob({ cron: "*/10 * * * * *", task: scraper_1.scraping });
        this.scheduler.start();
    }
    mongoSetup() {
        mongoose_1.default
            .connect(this.mongoUrl, { useNewUrlParser: true })
            .then(() => {
            return console.info(`Successfully connected to ${this.mongoUrl}`);
        })
            .catch(error => {
            console.error("Error connecting to database: ", error);
            return process.exit(1);
        });
    }
    async apolloServerSetup() {
        // const { defaultUser } = await seedDatabase();
        const schema = await type_graphql_1.buildSchema({
            resolvers: [website_resolver_1.WebsiteeResolver],
            emitSchemaFile: path_1.default.resolve(__dirname, "schema.gql"),
            // use document converting middleware
            globalMiddlewares: [typegoose_middleware_1.TypegooseMiddleware],
            // use ObjectId scalar mapping
            scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }],
            container: typedi_1.Container
        });
        // create mocked context
        // const context: Context = { user: undefined }; //{ user: defaultUser };
        // Create GraphQL server
        const server = new apollo_server_express_1.ApolloServer({ schema, });
        server.applyMiddleware({ app: this.app });
    }
    start(PORT) {
        this.app.listen(PORT, () => {
            console.log("Express server listening on port " + PORT);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map