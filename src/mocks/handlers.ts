import { http } from "msw"
import { NextResponse } from "next/server"
import user from "./data/user.json"

export const handlers = [
  http.get("/api/user", () => {
    return NextResponse.json(user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
  http.post("/api/user", async ({ request }) => {
    const requestBody = (await request.json()) as { id: string; password: string }
    const findUser = user.find(val => val.id === requestBody?.id && val.password === requestBody?.password)
    if (!findUser) {
      return NextResponse.json({ status: 404, reason: "아이디 혹은 패스워드가 잘못 되었습니다." })
    }
    return NextResponse.json(
      {
        status: 200,
        user: {
          id: findUser.id,
          name: findUser.name,
        },
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      },
    )
  }),
  http.get("/api/user/logout", () => {
    return NextResponse.json({ status: 200, message: "로그아웃 되었습니다." })
  }),
]
