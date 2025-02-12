"use client";

import { db } from "@repo/idb/client";
import type { User } from "@repo/idb/types";
import { redirect } from "next/navigation";
import { ButtonBack } from "@repo/ui/button-back";

function Dashboard() {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="max-w-sm w-full space-y-4">
        <ButtonBack />
        <h1 className="text-2xl font-bold">Hello {user.email}!</h1>
        <button
          onClick={() => db.auth.signOut()}
          className="px-3 py-1 bg-blue-600 text-white font-bold hover:bg-blue-700 w-full"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}

export default Dashboard;