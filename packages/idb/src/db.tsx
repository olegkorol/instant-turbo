"use client";

import { init, type User } from "@instantdb/react";
import schema from '../instant.schema.js'

const INSTANT_APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID || process.env.INSTANT_APP_ID

if (!INSTANT_APP_ID) {
  console.warn('INSTANT_APP_ID is not set')
}

export const db = init({ 
  appId: INSTANT_APP_ID || 'development', 
  schema 
})

export type { User };
