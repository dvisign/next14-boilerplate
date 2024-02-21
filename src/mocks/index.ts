export async function initMock() {
  if (typeof window === "undefined") {
    const { server } = await import("./server")
    server.listen()
  } else {
    const { worker } = await import("./browsers")
    worker.start({
      onUnhandledRequest: "bypass",
    })
  }
}
