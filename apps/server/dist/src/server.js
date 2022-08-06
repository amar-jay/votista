"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tq = __importStar(require("type-graphql"));
const apollo_server_1 = require("apollo-server");
const client_1 = require("./utils/client");
const type_graphql_1 = require("../prisma/generated/type-graphql");
const app = async () => {
    const schema = await tq.buildSchema({
        resolvers: type_graphql_1.resolvers,
        validate: false,
    });
    new apollo_server_1.ApolloServer({ schema, context: client_1.prisma }).listen({ port: 4000 }, () => console.log(`🚀 Server ready at: http://localhost:4000\n⭐️`));
};
app().catch(console.error);
//# sourceMappingURL=server.js.map