import { InstaQLEntity } from "@instantdb/core";
import schema from "../instant.schema.js";

export type { User } from "@instantdb/core";
export type Todo = InstaQLEntity<typeof schema, "todos">;
export type $User = InstaQLEntity<typeof schema, "$users">;
