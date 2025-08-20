import {
  integer,
  pgTable,
  varchar,
  timestamp,
  text,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const projects = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  created_at: timestamp("created_at").defaultNow(),
});
