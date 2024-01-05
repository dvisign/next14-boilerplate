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
      const { name, id } = action.payload
      state.name = name
      state.id = id
    },
  },
})

export const userInfoAction = userReducer.actions
export default userReducer.reducer
