'use client'
import { trpc } from "@/src/utils/trpc";
import Cookies from "js-cookie";

export default function Home() {
  const { mutate } = trpc.authRouter.postUser.useMutation();
  const { data } = trpc.authRouter.getUser.useQuery()
  Cookies.set('token','1234',{
    secure:true,
    sameSite:"none"
  })
  async function send() {
    mutate({
      email: "m@gmail.com",
      name: "mukul",
      password: "1111",
    });
  }
  return <button onClick={send}>Mutate</button>;
}
