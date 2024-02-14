import { http } from "msw"
import { NextResponse } from "next/server"
import user from "./data/user.json"

export const handlers = [
  http.get("/api/user", () => {
    console.log("응답 데이터:", JSON.stringify(user[1], null, 2))
    return NextResponse.json(user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
  http.post("/api/user", () => {
    console.log(user)
    return NextResponse.json(user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
]
