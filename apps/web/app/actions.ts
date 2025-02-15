"use server";

import { db } from "@repo/idb/server";
import type { Todo, $User } from "@repo/idb/types";

type TodoWithOwner = Todo & { owner: $User | undefined };

// We directly use the admin SDK to access the database, bypassing the permission checks.
export async function getAllTodos(): Promise<TodoWithOwner[]> {
  const { todos } = await db.query({ todos: { owner: {} } });
  return todos;
}

// We impersonate a user to access the database, hence respecting the permission checks.
export async function getTodosAsUser({
  impersonateAs,
}: {
  impersonateAs: string;
}): Promise<TodoWithOwner[]> {
  const { todos } = await db
    .asUser({ email: impersonateAs })
    .query({ todos: { owner: {} } });
  return todos;
}
