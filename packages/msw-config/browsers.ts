import { setupWorker } from "msw/browser"
import { handlers } from "./handlers"

export const worker = setupWorker(...handlers)
export function createWorker(handler) {
  return setupWorker(...handler)
}
