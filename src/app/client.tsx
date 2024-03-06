"use client"
import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/store"
import test from "ibj"

function Client({ children }: { children: ReactNode }) {
  const user = useAppSelector(state => state.user)
  const router = useRouter()
  console.log(test)
  useEffect(() => {
    if (!user.id && !user.name) router.push("/")
  }, [user])
  // 로그아웃일때 레이아웃
  if (!user.name || !user.id) return <div>{children}</div>
  // 로그인 후 레이아웃
  return <>{children}</>
}

export default Client
