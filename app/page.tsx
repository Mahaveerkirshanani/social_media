"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  let isAuthenticated = false;

  if (!isAuthenticated) router.push("/auth/register");
  return <div>page</div>;
};

export default page;
