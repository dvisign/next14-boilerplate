import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UserLoginTyps } from "@/types/model/user/user"

const initialState = {
  loading: false,
  name: "",
  id: "",
}

export const requestLogin = createAsyncThunk("user/login", async (payload: UserLoginTyps) => {
  return axios.post("/api/user", payload)
})
export const requestLogout = createAsyncThunk("user/logout", async action => {
  return axios.get("/api/user/logout")
})

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(requestLogin.pending, state => {
        state.loading = true
      })
      .addCase(requestLogin.fulfilled, (state, action) => {
        const { payload } = action
        state.loading = false
        // state.name = payload.data.name
        // state.id = payload.data.id
      })
      .addCase(requestLogin.rejected, (state, action) => {
        state.loading = false
        // alert(action?.data?.reason || "알 수 없는 오류가 발생 하였습니다.")
      })
      .addCase(requestLogout.pending, state => {
        console.log("logout")
      })
      .addCase(requestLogout.fulfilled, (state, action) => {
        const { payload } = action
        state.id = ""
        state.name = ""
        // if (payload.data.staus) {
        //   alert(payload.data.message)
        // }
      })
      .addCase(requestLogout.rejected, (state, action) => {
        console.log("error")
      })
  },
})

export const userInfoAction = userReducer.actions
export default userReducer.reducer
