import { z } from "zod";


export const userSchema = z.object({
    name:z.string().min(1,{
        message:"Name is req"
    }),
    email: z.string().min(1, {
        message: "email is req"
    }),
    password: z.string().min(1, {
        message: "password is req"
    })
})