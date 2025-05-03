import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../db/client.js";

export const auth = betterAuth({
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      scope: ["identify", "email"],
    },
  },
  secret: process.env.AUTH_SECRET,
  baseURL: "http://localhost:3001/api/auth",
  trustedOrigins: ["http://localhost:5173"],
  cookies: {
    secure: false,
    sameSite: "Lax",
  },
  database: prismaAdapter(prisma, { provider: "postgresql" }),
});
