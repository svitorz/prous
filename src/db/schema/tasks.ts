import {
  varchar,
  timestamp,
  integer,
  pgTable,
  pgEnum,
} from "drizzle-orm/pg-core";
import { projects } from "./projects";

export const statusEnum = pgEnum("status", ["todo", "doing", "done"]);

export const tasks = pgTable("tasks", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  status: statusEnum().notNull().default("todo"),
  due_date: timestamp("due_date"),
  project_id: integer("project_id")
    .references(() => projects.id)
    .notNull(),
  created_at: timestamp("created_at"),
});
