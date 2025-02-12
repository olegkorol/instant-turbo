'use client'

import { useState } from 'react'
import { getSomeone, getSomeoneAsSomeone } from '../actions'
import { type User } from '@repo/idb/types'
import { ButtonBack } from '@repo/ui/button-back'

export default function AnotherPage() {
  const [email, setEmail] = useState('')
  const [impersonateAs, setImpersonateAs] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [noUser, setNoUser] = useState(false)

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setNoUser(false)
    try {
      const userData = await getSomeone({ email })
      if (userData) {
        setUser(userData)
      } else {
        setNoUser(true)
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSearchImpersonated = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setNoUser(false)
    try {
      const userData = await getSomeoneAsSomeone({ email, impersonateAs })
      if (userData) {
        setUser(userData)
      } else {
        setNoUser(true)
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="max-w-sm w-full space-y-4">
        <ButtonBack />
        <h1 className="text-2xl font-bold">Search User by Email</h1>
        <p className="text-sm text-muted-foreground">
          This query uses the admin SDK to access the database, bypassing the permission checks.
        </p>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded w-full"
            placeholder="Enter email"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        <p className="text-sm text-muted-foreground">
          This query impersonates the user to access the database, hence respects the permission checks.
        </p>
        <form onSubmit={handleSearchImpersonated} className="flex gap-2 items-center justify-between">
          <div className="flex flex-col gap-2 w-full">
            <input
              type="impersonate-as"
              value={impersonateAs}
              onChange={(e) => setImpersonateAs(e.target.value)}
              className="border border-gray-300 px-3 py-1 rounded w-full"
              placeholder="Enter email of the user to impersonate as"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-3 py-1 rounded w-full"
              placeholder="Enter email"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && <div className="text-red-500">{error}</div>}

        {user && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-xl font-bold">User Details</h2>
            <pre className="text-sm text-muted-foreground bg-muted p-4 rounded-md whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</pre>
          </div>
        )}

        {noUser && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-xl font-bold">User Details</h2>
            <pre className="text-sm text-muted-foreground bg-muted p-4 rounded-md whitespace-pre-wrap">No user found</pre>
          </div>
        )}
      </div>
    </main>
  )
}
