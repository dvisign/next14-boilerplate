export interface UserModelType {
  id: string
  name: string
}
export interface UserResponseTypes {
  status: number
  user?: UserModelType
  reason?: string
}
export interface UserLoginTypes {
  id: string
  password: string
}
