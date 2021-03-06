import express from "express";
import { ApolloServer } from "apollo-server-express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import { User } from "./entities/user";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { scraping } from "./scraping/scraper";
import Scheduler from "./scraping/scheduler";
import { Container } from "typedi";
import { WebsiteeResolver } from "./resolvers/website.resolver";

export interface Context {
  user: User;
}

class App {
  private app = express();
  private scheduler: Scheduler = new Scheduler();
  private mongoUrl: string =
    "mongodb+srv://suianbu:Bsa770111@cluster0-m5knr.mongodb.net/wtp?retryWrites=true&w=majority";

  constructor() {
    this.apolloServerSetup();
    this.config();
    this.mongoSetup();
    // this.schedule();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private schedule() {
    this.scheduler.addJob({cron: "*/10 * * * * *", task: scraping});
    this.scheduler.start();
  }

  private mongoSetup(): void {
    mongoose
      .connect(this.mongoUrl, { useNewUrlParser: true })
      .then(() => {
        return console.info(`Successfully connected to ${this.mongoUrl}`);
      })
      .catch(error => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  }

  private async apolloServerSetup() {
    // const { defaultUser } = await seedDatabase();
    const schema = await buildSchema({
      resolvers: [WebsiteeResolver],
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      // use document converting middleware
      globalMiddlewares: [TypegooseMiddleware],
      // use ObjectId scalar mapping
      scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
      container: Container
    });

    // create mocked context
    // const context: Context = { user: undefined }; //{ user: defaultUser };

    // Create GraphQL server
    const server = new ApolloServer({ schema, /*context*/ });

    server.applyMiddleware({ app: this.app });
  }

  public start(PORT: number) {
    this.app.listen(PORT, () => {
      console.log("Express server listening on port " + PORT);
    });
  }
}

export default App;
