import { ReactNode } from "react"

function Template({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>/info/layout.tsx</div>
      {children}
    </div>
  )
}
export default Template
