"use client";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const session = useSession();
  return (
    <div className="container">
      <Link href={`/dashboard/user/${session?.data?.user?.id}`}>Profile</Link>
    </div>
  );
};

export default DashboardPage;
