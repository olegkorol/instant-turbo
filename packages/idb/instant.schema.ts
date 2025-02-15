import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    $users: i.entity({
      email: i.string().unique().indexed(),
    }),
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.number(),
    }),
  },
  // You can define links here.
  // https://www.instantdb.com/docs/modeling-data#3-links
  links: {
    todoOwner: {
      forward: { on: 'todos', has: 'one', label: 'owner', onDelete: 'cascade' },
      reverse: { on: '$users', has: 'many', label: 'todos' },
    }
  },
  // If you use presence, you can define a room schema here
  // https://www.instantdb.com/docs/presence-and-topics#typesafety
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema { }
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
