"use client";
import { usePathname } from "next/navigation";
import React from "react";

const User = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return <div>user</div>;
};

export default User;
