"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider as NextAuthProvider } from "next-auth/react";
const RootProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextAuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </NextAuthProvider>
  );
};

export default RootProviders;
