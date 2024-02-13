"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { ContainerStyles } from "@/components/styles/common"
function Client({ children }) {
  const user = useSelector((state) => state.user)
  const router = useRouter()
  useEffect(() => {
    if (!user.id && !user.name) router.push("/")
  }, [user])
  // 로그아웃일때 레이아웃
  if (!user.name || !user.id) return <ContainerStyles>{children}</ContainerStyles>
  // 로그인 후 레이아웃
  return <>{children}</>
}

export default Client
