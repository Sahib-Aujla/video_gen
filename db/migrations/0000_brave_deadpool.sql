CREATE TABLE "user" (
	"id" integer PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"image_url" text,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"credits" integer,
	"created_at" date,
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
