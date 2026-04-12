import { mysqlTable, serial, varchar, text, timestamp, boolean } from "drizzle-orm/mysql-core";

export const contacts = mysqlTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  budget: varchar("budget", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blog = mysqlTable("blog", {
  id: varchar("id", { length: 255 }).primaryKey(), // Using slug as ID
  title: varchar("title", { length: 255 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content"),
  category: varchar("category", { length: 100 }).notNull(),
  author: varchar("author", { length: 100 }).notNull(),
  readTime: varchar("read_time", { length: 50 }),
  img: varchar("img", { length: 500 }).notNull(),
  featured: boolean("featured").default(false),
  // SEO specific fields
  seoTitle: varchar("seo_title", { length: 255 }),
  seoDescription: varchar("seo_description", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});
