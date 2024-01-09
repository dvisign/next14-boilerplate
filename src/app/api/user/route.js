import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET(req) {
  return NextResponse.json({
    id: "test",
    name: "하이",
  })
}
export async function POST(req) {
  const res = await req.json()
  const headerList = headers()
  const { id, password } = res
  if (id === "test" && password === "1234") {
    return NextResponse.json(
      {
        id: "test",
        name: "하이",
      },
      {
        status: 200,
        headers: { ...headerList },
      }
    )
  } else {
    return NextResponse.json(
      {
        reason: "id 혹은 패스워드가 맞지 않습니다.",
      },
      {
        status: 404,
        headers: { ...headerList },
      }
    )
  }
}
