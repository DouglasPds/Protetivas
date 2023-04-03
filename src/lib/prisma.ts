import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// export let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
//   }
// }
