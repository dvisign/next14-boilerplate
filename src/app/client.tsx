"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/store"

function Client({ children }) {
  const user = useAppSelector(state => state.user)
  const router = useRouter()
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      ;(async () => {
        const { server } = await import("../mocks/http")
        server.listen()
      })()
    } else {
      ;(async () => {
        const { worker } = await import("../mocks/browsers")
        worker.start()
      })()
    }
  }
  useEffect(() => {
    if (!user.id && !user.name) router.push("/")
  }, [user])
  // 로그아웃일때 레이아웃
  if (!user.name || !user.id) return <div>{children}</div>
  // 로그인 후 레이아웃
  return <>{children}</>
}

export default Client
