import { RequestHandler } from "msw"
import { setupWorker } from "msw/browser"
import { handlers } from "./handlers"

export const worker = setupWorker(...handlers)
export function createWorker(handler: RequestHandler[]) {
  return setupWorker(...handler)
}
