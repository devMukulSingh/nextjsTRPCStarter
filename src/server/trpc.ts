import { initTRPC, TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { isAuth } from "../utils/jwt";


// export const createContext = async (opts: FetchCreateContextFnOptions): Promise<{ token: string | undefined }> => {
//     const token = cookies().get('token')?.value.toString();
//     console.log(token);
//     return { token };
// };
// export const t = initTRPC.context<typeof createContext>().create();



export const t = initTRPC.create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ next }) => {
    const token = cookies().get('token')?.value.toString();

    if (!token) throw new TRPCError({
        code: "FORBIDDEN",
        message: "User is unauthenticated"
    })

    // const isJwtVerified = await isAuth(token);
    
    // if (!isJwtVerified) throw new TRPCError({
    //     code: "FORBIDDEN",
    //     message: "User is unauthenticated"
    // })

    return next()
})
