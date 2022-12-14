import "reflect-metadata";
import * as tq from "type-graphql";
import { ApolloServer } from "apollo-server";
import { prisma } from "./utils/client";
import { resolvers } from "../prisma/generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
    validate: false,
  });

  new ApolloServer({ schema, context: prisma }).listen({ port: 4000 }, () =>
    console.log(`đ Server ready at: http://localhost:4000\nâ­ď¸`)
  );
};

app().catch(console.error);
