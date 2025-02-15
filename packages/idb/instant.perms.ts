// Docs: https://www.instantdb.com/docs/permissions

import type { InstantRules } from "@instantdb/react";

const rules = {
  $default: {
    allow: {
      view: "false",
      update: "false",
      delete: "false",
    },
  },
  todos: {
    allow: {
      view: "isOwner",
      update: "isOwner",
      delete: "isOwner",
    },
    bind: ["isOwner", "auth.id != null && auth.id == data.owner"],
  },
} satisfies InstantRules;

export default rules;
