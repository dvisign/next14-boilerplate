"use client"
import { useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/store"
import MswGenerator from "@repo/msw"
import { handlers } from "@/mocks/handlers"

function Client({ children }: { children: ReactNode }) {
  const user = useAppSelector(state => state.user)
  const router = useRouter()
  useEffect(() => {
    if (!user.id && !user.name) router.push("/")
  }, [user, router])
  // 로그아웃일때 레이아웃
  if (!user.name || !user.id)
    return (
      <div>
        {children}
        <MswGenerator handlers={handlers} />
      </div>
    )
  // 로그인 후 레이아웃
  return (
    <>
      {children}
      <MswGenerator handlers={handlers} />
    </>
  )
}

export default Client
