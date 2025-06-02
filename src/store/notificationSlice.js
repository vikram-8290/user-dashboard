import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [
      { id: 1, message: "New user registered", time: "2 minutes ago", read: false },
      { id: 2, message: "System update completed", time: "1 hour ago", read: false },
      { id: 3, message: "Weekly report generated", time: "3 hours ago", read: true },
      { id: 4, message: "Database backup completed", time: "1 day ago", read: true },
    ],
    unreadCount: 2,
  },
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.notifications.find((n) => n.id === action.payload)
      if (notification && !notification.read) {
        notification.read = true
        state.unreadCount -= 1
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach((n) => (n.read = true))
      state.unreadCount = 0
    },
  },
})

export const { markAsRead, markAllAsRead } = notificationSlice.actions
export default notificationSlice.reducer
