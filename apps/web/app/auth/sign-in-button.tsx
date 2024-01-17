"use client";
import { Button } from "@ui/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <p>{session.user.name}</p>
        <Link href={"/dashboard"} passHref>
          <Button>Dashboard</Button>
        </Link>
        <Button
          variant="outline"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <div className="flex gap-x-3">
      <Button onClick={() => signIn()}>Sign In</Button>
      <Link href={"/auth/sign-up"} passHref>
        <Button>Sign Up</Button>
      </Link>
    </div>
  );
};

export default SignInButton;
