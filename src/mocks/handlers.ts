import { http, HttpResponse } from "msw"
import user from "./data/user.json"

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json(user[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
  http.post("/api/user", () => {
    console.log("로그인")
    return HttpResponse.json(user[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    })
  }),
]
