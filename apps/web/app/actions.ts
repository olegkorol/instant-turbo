'use server'

import { db } from '@repo/idb/server'
import { type User } from '@repo/idb/types'

// We directly use the admin SDK to access the database, bypassing the permission checks.
export async function getSomeone({ email }: { email: string }): Promise<User> {
  return await db.auth.getUser({
    email,
  })
}

// We impersonate a user to access the database, hence respecting the permission checks.
export async function getSomeoneAsSomeone({ email, impersonateAs }: { email: string, impersonateAs: string }): Promise<User> {
  return await db.asUser({ email: impersonateAs }).auth.getUser({
    email,
  })
}
