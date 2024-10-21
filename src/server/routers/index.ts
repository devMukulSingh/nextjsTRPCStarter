import {  router } from "../trpc";
import { authRouter } from "./authRouter";



export const appRouter = router({
    authRouter,
})

export type AppRouter = typeof appRouter;