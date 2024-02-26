import { setupWorker } from "msw/browser"
import { handlers } from "./handlers"
import { RequestHandler } from "msw"

type HandlerType = RequestHandler<any, any>
export const worker = setupWorker(...handlers)
export function createWorker(handler: HandlerType[]) {
  return setupWorker(...handler)
}
