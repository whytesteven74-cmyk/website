import { pgTable, serial, text, timestamp, varchar, integer, boolean } from 'drizzle-orm/pg-core';

// Media files table
export const media = pgTable('media', {
  id: serial('id').primaryKey(),
  filename: text('filename').notNull(),
  url: text('url').notNull(),
  type: varchar('type', { length: 50 }),
  size: integer('size'),
  altText: text('alt_text'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Enhanced blog posts table (for database-driven blog)
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: varchar('slug', { length: 200 }).unique().notNull(),
  content: text('content'),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  author: varchar('author', { length: 100 }).default('Steven Whyte'),
  tags: text('tags'), // JSON array as text
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Contact form submissions
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  replied: boolean('replied').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Analytics/metrics (optional)
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  path: text('path').notNull(),
  referrer: text('referrer'),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Media = typeof media.$inferSelect;
export type NewMedia = typeof media.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
