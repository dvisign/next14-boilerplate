import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(req) {
  const headerList = headers()
  return NextResponse.json(
    {
      message: "로그아웃 되었습니다.",
      status: true,
    },
    {
      status: 200,
      headers: { ...headerList },
    }
  )
}
