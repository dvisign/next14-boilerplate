import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { UserLoginTypes, UserResponseTypes } from "@/types/model/user/userModel"
import { UserDefaultTypes } from "@/types/slice/user/userSliceTypes"

interface defaultStateTypes extends UserDefaultTypes {
  loading: boolean
}

const initialState: defaultStateTypes = {
  loading: false,
  name: "",
  id: "",
}

export const requestLogin = createAsyncThunk<UserResponseTypes, UserLoginTypes, { rejectValue: UserResponseTypes }>(
  "user/login",
  async (payload: UserLoginTypes, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:9090/api/user", payload)
      return response.data // 성공 시 응답 데이터 반환
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Axios 에러 처리
        // 여기서 YourErrorType은 에러 처리에 사용할 타입이며, 적절히 정의해야 합니다.
        return rejectWithValue(err.response?.data)
      } else {
        // 기타 에러 처리
        return rejectWithValue({ status: 404, reason: "An unknown error occurred" })
      }
    }
  },
)

export const requestLogout = createAsyncThunk<UserResponseTypes, UserLoginTypes, { rejectValue: UserResponseTypes }>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:9090/api/user/logout")
      return response.data // 성공 시 응답 데이터 반환
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Axios 에러 처리
        // 여기서 YourErrorType은 에러 처리에 사용할 타입이며, 적절히 정의해야 합니다.
        return rejectWithValue(err.response?.data)
      } else {
        // 기타 에러 처리
        return rejectWithValue({ status: 404, reason: "An unknown error occurred" })
      }
    }
  },
)

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(requestLogin.pending, state => {
        state.loading = true
      })
      .addCase(requestLogin.fulfilled, (state: defaultStateTypes, action: PayloadAction<UserResponseTypes>) => {
        const { payload } = action
        const { reason, status, user } = payload
        state.loading = false
        if (status === 200) {
          state.name = user.name
          state.id = user.id
        } else {
          alert(reason || "알 수 없는 오류가 발생하였습니다. 잠시 후 다시 이용해 주세요.")
        }
      })
      .addCase(requestLogin.rejected, (state: defaultStateTypes, action: PayloadAction<UserResponseTypes | string>) => {
        state.loading = false
        // 에러 정보에 따른 상태 업데이트 또는 알림 처리
        console.error(action.payload)
      })
      .addCase(requestLogout.pending, state => {
        state.loading = true
      })
      .addCase(requestLogout.fulfilled, state => {
        state.loading = false
        state.id = ""
        state.name = ""
      })
      .addCase(requestLogout.rejected, (state, action) => {
        state.loading = false
        // 에러 정보에 따른 상태 업데이트 또는 알림 처리
        console.error(action.payload)
      })
  },
})

export const userInfoAction = userReducer.actions
export default userReducer.reducer
