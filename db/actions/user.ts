import { UserInterface } from "@/utils/interface";
import { db } from "../drizzle"
import { User } from "../schema"
import { eq } from "drizzle-orm";
export const saveUserInDb = async (user: UserInterface) => {
    const existingUser = await db.select().from(User).where(eq(User.email, user.email))

    if (existingUser.length === 0) {
        const newUser = db.insert(User).values({
            userId: user.userId,
            imageUrl: user.imageUrl,
            name: user.name,
            email: user.email
        });
        return { user: newUser, message: 'User Created Successfuly' }
    }
    return { user: existingUser[0], message: 'User Already Registered' }
}