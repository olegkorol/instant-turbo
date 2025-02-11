"use client";

import React, { useState } from "react";
import { db, type User } from "@repo/idb/db";
import { redirect } from "next/navigation";

function Dashboard() {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return;
  }

  if (error) {
    return <div className="p-4 text-red-500">Uh oh! {error.message}</div>;
  }

  if (user) {
    // The user is logged in! Let's load the `Main`
    return <Main user={user} />;
  }
  // The use isn't logged in yet. Let's show them the `Login` component
  return redirect("/login");
}

function Main({ user }: { user: User }) {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Hello {user.email}!</h1>
      <button
        onClick={() => db.auth.signOut()}
        className="px-3 py-1 bg-blue-600 text-white font-bold hover:bg-blue-700"
      >
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;