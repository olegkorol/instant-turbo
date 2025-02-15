import { InstaQLEntity, User } from "@instantdb/react";
import schema from "../instant.schema.js";

export type { User } from "@instantdb/react";

type Todo = InstaQLEntity<typeof schema, "todos">;
type $User = InstaQLEntity<typeof schema, "$users">;

export type { Todo, $User };
