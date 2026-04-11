import { mysqlTable, int, varchar, text, timestamp, tinyint } from "drizzle-orm/mysql-core";

/* ================= CONTACT ================= */

export const contacts = mysqlTable("contacts", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  budget: varchar("budget", { length: 255 }),
  message: text("message").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/* ================= BLOG ================= */

export const blog = mysqlTable("blog", {
  // slug sebagai primary key → OK
  id: varchar("id", { length: 255 }).primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content"),

  category: varchar("category", { length: 100 }).notNull(),
  author: varchar("author", { length: 100 }).notNull(),
  readTime: varchar("read_time", { length: 50 }),

  img: varchar("img", { length: 500 }).notNull(),

  // boolean → tinyint(1)
  featured: tinyint("featured").default(0),

  seoTitle: varchar("seo_title", { length: 255 }),
  seoDescription: varchar("seo_description", { length: 255 }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});