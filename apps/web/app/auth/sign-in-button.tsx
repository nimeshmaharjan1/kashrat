"use client";
import { Button } from "@ui/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p>{session.user.name}</p>
        <Button
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
    );
  }
  return <Button onClick={() => signIn()}>Sign In</Button>;
};

export default SignInButton;
