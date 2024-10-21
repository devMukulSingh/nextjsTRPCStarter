import { prisma } from "@/src/utils/prisma";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { userSchema } from "@/src/utils/schema";


export const authRouter = router({
    postUser: protectedProcedure.input(userSchema).mutation(async ({ input }) => {

        const newUser = await prisma.user.create({
            data: input
        })
        return newUser;
    }),
    getUser: protectedProcedure.query(async () => {
        const Users = await prisma.user.findMany();
        return Users;
    })
})