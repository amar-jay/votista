"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const env = {
    NODE_ENV: "dev",
};
exports.prisma = global.prisma ||
    new client_1.PrismaClient({
        log: ["query"],
    });
if (env.NODE_ENV !== "production") {
    global.prisma = exports.prisma;
}
//# sourceMappingURL=client.js.map