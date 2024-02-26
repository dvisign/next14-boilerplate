export async function initMock(handlers) {
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
