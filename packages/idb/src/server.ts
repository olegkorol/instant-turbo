// https://www.instantdb.com/docs/backend

import { init } from "@instantdb/admin";
import schema from '../instant.schema.js'

const INSTANT_APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID || process.env.INSTANT_APP_ID
const INSTANT_ADMIN_TOKEN = process.env.INSTANT_ADMIN_TOKEN

if (!INSTANT_APP_ID) {
  console.warn('INSTANT_APP_ID is not set')
}

if (!INSTANT_ADMIN_TOKEN) {
  console.warn('INSTANT_ADMIN_TOKEN is not set')
}

export const db = init({
  appId: INSTANT_APP_ID || 'development',
  adminToken: INSTANT_ADMIN_TOKEN || 'development',
  schema
})
