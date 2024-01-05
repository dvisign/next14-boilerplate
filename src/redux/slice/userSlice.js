import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  id: "",
}

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const { id, password } = action.payload
      if (id === "test" && password === "1234") {
        state.id = "test"
        state.name = "정문채"
      } else {
        alert("틀려 임마")
      }
    },
    resetUser(state) {
      state.id = ""
      state.name = ""
    },
  },
})

export const userInfoAction = userReducer.actions
export default userReducer.reducer
