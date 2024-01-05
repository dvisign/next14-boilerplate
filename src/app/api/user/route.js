import { NextResponse } from "next/server"
export async function GET(req) {
  return NextResponse.json({
    id: "test",
    name: "하이",
  })
}
