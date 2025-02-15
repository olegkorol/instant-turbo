"use client";

import { db } from "@repo/idb/client";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Uh oh! {error.message}</div>;
  }

  if (!user) {
    return redirect("/login");
  }

  return <>{children}</>;
}
