export async function initMock() {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      ;(async () => {
        const { server } = await import("./server")
        server.listen()
      })()
    } else {
      ;(async () => {
        const { worker } = await import("./browsers")
        worker.start()
      })()
    }
  }
}
