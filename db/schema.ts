import { text,integer, pgTable, date, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const User = pgTable("user", {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey().notNull(),
    userId: text("user_id").notNull(),
    imageUrl: text('image_url'),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    credits: integer('credits').default(50),
    createdAt: date('created_at').default(sql`now()`)
});