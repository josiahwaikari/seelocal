import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { SessionInterface } from "@/common.types";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          throw new Error("Invalid email or password");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user?.password) {
          throw new Error("Invalid email or password");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      if (!session.user) return session;

      const user = await db.user.findUnique({
        where: { email: session.user.email! },
        select: {
          id: true,
          email: true,
          image: true,
          createdAt: true,
        },
      });

      if (!user) return session;

      session.user = user;
      return session;
    },
    async signIn({ account, profile }) {
      return true;
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
