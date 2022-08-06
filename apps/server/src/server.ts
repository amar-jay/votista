import "reflect-metadata";
import * as tq from "type-graphql";
import { ApolloServer } from "apollo-server";
import { prisma } from "./utils/client";
import { resolvers } from "@generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
  });

  new ApolloServer({ schema, context: prisma }).listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000\n⭐️`)
  );
};

app();
