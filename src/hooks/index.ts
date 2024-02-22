import { useCallback, useState, ChangeEvent } from "react"
import { UseInputReturnTypes } from "./hooks.types"
import color from "@/assets/scss/_color.module.scss"

export const useInput = <T>(initialData: T): UseInputReturnTypes<T> => {
  const [value, setValue] = useState(initialData)
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T)
  }, [])
  return [value, handler, setValue]
}

export const useMemoiZation = <T extends object>(prevProps: T, nextProps: T): boolean => {
  return Object.keys(prevProps).every(key => prevProps[key as keyof T] === nextProps[key as keyof T])
}

export const useColors = () => {
  return color
}
