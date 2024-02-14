import { http, HttpResponse } from "msw"
import user from "./data/user.json"

export const handlers = [
  http.get("/api/user", () => {
    console.log("응답 데이터:", JSON.stringify(user[1], null, 2))
    return HttpResponse.json(user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
  http.post("/api/user", () => {
    console.log(user)
    return HttpResponse.json(user, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
]
