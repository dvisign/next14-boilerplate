import { RequestHandler } from "msw"
export async function initMock(handlers: RequestHandler[]) {
  if (typeof window === "undefined") {
    const { server } = await import("./server")
    server.listen()
  } else {
    // const { worker } = await import("./browsers")
    // await worker.start()
    const { createWorker } = await import("./browsers")
    const worker = createWorker(handlers)
    worker.start({
      onUnhandledRequest: "bypass",
    })
  }
}
