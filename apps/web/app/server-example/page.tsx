'use client'

import { useState } from 'react'
import { getAllTodos, getTodosAsUser } from '../actions'
import type { Todo, $User } from '@repo/idb/types'
import { ButtonBack } from '@repo/ui/button-back'

type TodoWithOwner = Todo & { owner: $User | undefined }

export default function ServerExamplePage() {
  const [impersonateAs, setImpersonateAs] = useState('')
  const [todos, setTodos] = useState<TodoWithOwner[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetAllTodos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const allTodos = await getAllTodos()
      setTodos(allTodos)
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

  const handleGetTodosAsUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const userTodos = await getTodosAsUser({ impersonateAs })
      setTodos(userTodos)
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
        <h1 className="text-2xl font-bold">Fetch Todos</h1>
        <p className="text-sm text-muted-foreground">
          This query uses the admin SDK to access all todos in the database.
        </p>
        <form onSubmit={handleGetAllTodos} className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 w-full"
          >
            {loading ? 'Fetching...' : 'Fetch All Todos'}
          </button>
        </form>

        <p className="text-sm text-muted-foreground">
          This query impersonates a user to fetch only their todos.
        </p>
        <form onSubmit={handleGetTodosAsUser} className="flex flex-col gap-2">
          <input
            type="email"
            value={impersonateAs}
            onChange={(e) => setImpersonateAs(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded w-full"
            placeholder="Enter email of user to impersonate"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 w-full"
          >
            {loading ? 'Fetching...' : 'Fetch All Todos (impersonated)'}
          </button>
        </form>

        {error && <div className="text-red-500">{error}</div>}

        {todos.length > 0 && (
          <div className="mt-4 border border-gray-300 max-w-sm w-full">
            <div className="divide-y divide-dashed divide-gray-300">
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center h-10 px-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    -
                  </div>
                  <div className="flex-1 overflow-hidden break-words">
                    {todo.done ? (
                      <span className="line-through">{todo.text}</span>
                    ) : (
                      <span>{todo.text}</span>
                    )}
                    {todo.owner && (
                      <span className="text-xs text-gray-400 ml-2">
                        owner: {todo.owner.id?.slice(0, 8) + '...'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
