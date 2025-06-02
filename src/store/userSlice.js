// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    addUserToStore: (state, action) => {
      state.users.push(action.payload)
    },
  },
})

export const { setUsers, addUserToStore } = userSlice.actions
export default userSlice.reducer
