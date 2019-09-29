import * as express from "express";
import { ApolloServer } from "apollo-server";
import * as path from "path";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import { RecipeResolver } from "./resolvers/recipe-resolver";
import { RateResolver } from "./resolvers/rate-resolver";
import { User } from "./entities/user";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { seedDatabase } from "./helpers";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";

export interface Context {
  user: User;
}

class App {
  public app: ApolloServer;
  public routePrv: Routes = new Routes();
  public mongoUrl: string =
    "mongodb+srv://suianbu:Bsa770111@cluster0-m5knr.mongodb.net/wtp?retryWrites=true&w=majority";

  constructor() {
    this.apolloServerSetup();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
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
    const { defaultUser } = await seedDatabase();
    const schema = await buildSchema({
      resolvers: [RecipeResolver, RateResolver],
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      // use document converting middleware
      globalMiddlewares: [TypegooseMiddleware],
      // use ObjectId scalar mapping
      scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }]
    });

    // create mocked context
    const context: Context = { user: defaultUser };

    // Create GraphQL server
    this.app = new ApolloServer({ schema, context });
  }
}

export default new App().app;
