import { users } from "../db/schema/users";

type NewUser = typeof users.$inferInsert;

const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning({ insertedId: users.id });
};
