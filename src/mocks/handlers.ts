import { http, HttpResponseResolver, HttpResponse } from "msw"
import user from "./data/user.json"

type LoginRequest = {
  id: string
  password: string
}
type LoginUserResponseType = {
  id: string
  name: string
}

type SdkResponse = {
  status: number
  reason?: string
  user?: LoginUserResponseType
}

function handleLoginRequest(resolver: HttpResponseResolver<never, LoginRequest, SdkResponse>) {
  return http.post("http://localhost:9090/api/user", resolver)
}

export const handlers = [
  handleLoginRequest(async ({ request }) => {
    const requestBody = (await request.json()) as { id: string; password: string }
    const findUser = user.find(val => val.id === requestBody?.id && val.password === requestBody?.password)
    if (!findUser) {
      return HttpResponse.json(
        {
          status: 404,
          reason: "아이디 혹은 패스워드가 잘못 되었습니다.",
        },
        {
          headers: {
            "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
          },
        },
      )
    }
    return HttpResponse.json(
      {
        status: 200,
        user: {
          id: findUser.id,
          name: findUser.name,
        },
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      },
    )
  }),
  http.get("http://localhost:9090/api/user/logout", () => {
    return HttpResponse.json({ status: 200, message: "로그아웃 되었습니다." })
  }),
]
