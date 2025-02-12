'use server'

import { db } from '@repo/idb/server'
import { type User } from '@repo/idb/types'

export async function getSomeone({ email }: { email: string }): Promise<User> {
  return await db.auth.getUser({
    email,
  })
}
