"use client";
import React, { ReactNode } from "react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";
const SessionProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};

export default SessionProvider;
