import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import notificationReducer from "./notificationSlice"

export const store = configureStore({
  reducer: {
    users: userReducer,
    notifications: notificationReducer,
  },
})
