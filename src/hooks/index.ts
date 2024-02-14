import { useCallback, useState, ChangeEvent } from "react"
import { UseInputReturnTypes } from "./types"

export const useInput = <T>(initialData: T): UseInputReturnTypes<T> => {
  const [value, setValue] = useState(initialData)
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T)
  }, [])
  return [value, handler, setValue]
}
