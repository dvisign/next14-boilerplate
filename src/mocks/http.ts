// import { createMiddleware } from "@mswjs/http-middleware"
// import express from "express"
// import cors from "cors"
// import { handlers } from "./handlers"

// const app = express()
// const port = 9090

// app.listen(port, () => {
//   console.log(`server start in http://localhost:${port}`)
// })

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200, credentials: true }))
// app.use(createMiddleware(...handlers))
import { setupServer } from "msw/node"
import { handlers } from "./handlers"

export const server = setupServer(...handlers)
