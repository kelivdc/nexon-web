import { mysqlTable, serial, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const contacts = mysqlTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  budget: varchar("budget", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
