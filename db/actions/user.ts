'use server'
import { UserInterface } from "@/utils/interface";
import { db } from "../drizzle"
import { User } from "../schema"
import { eq } from "drizzle-orm";
export const saveUserInDb = async (user: UserInterface) => {
    try {
        const existingUser = await db.select().from(User).where(eq(User.email, user.email))

        if (existingUser.length === 0) {
            const newUser = await db.insert(User).values({
                userId: user.userId,
                imageUrl: user.imageUrl,
                name: user.name,
                email: user.email
            }).returning();
            return { user: newUser[0], message: 'User Created Successfuly' }
        }
        return { user: existingUser[0], message: 'User Already Registered' }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error saving user to database:", error);
        return { user: null, message: `Error: ${error.message}` };
    }
}