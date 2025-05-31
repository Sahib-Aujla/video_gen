
import { integer, text, pgTable, date } from "drizzle-orm/pg-core";

export const User = pgTable("user", {
    id: integer("id").primaryKey().unique(),
    userId: text("user_id").notNull(),
    imageUrl: text('image_url'),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    credits: integer('credits').$default(() => 50),
    createdAt: date('created_at').$default(() => Date.now().toString())
});
