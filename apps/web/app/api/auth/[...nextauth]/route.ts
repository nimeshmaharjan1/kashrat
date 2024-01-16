import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Type your email here...",
        },
        password: { label: "Password", type: "password" },
      },
      name: "Credentials",
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) return null;
        const res = await fetch("http://localhost:8080/v1/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
