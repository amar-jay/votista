"use strict";
exports.__esModule = true;
exports.prisma = void 0;
// src/server/db/client.ts
var client_1 = require("@prisma/client");
// import { env } from "../../env/server.mjs";
var env = {
    NODE_ENV: "dev"
};
exports.prisma = global.prisma ||
    new client_1.PrismaClient({
        log: ["query"]
    });
if (env.NODE_ENV !== "production") {
    global.prisma = exports.prisma;
}
