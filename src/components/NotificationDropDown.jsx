"use client"
import { List, Button, Typography, Badge } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { markAsRead, markAllAsRead } from "../store/notificationSlice"

const { Text } = Typography

const NotificationDropdown = () => {
  const dispatch = useDispatch()
  const { notifications } = useSelector((state) => state.notifications)

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id))
  }

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead())
  }

  return (
    <div className="w-80 bg-white rounded-lg shadow-lg border">
      <div className="p-4 border-b flex items-center justify-between">
        <Text strong>Notifications</Text>
        <Button type="link" size="small" onClick={handleMarkAllAsRead}>
          Mark all as read
        </Button>
      </div>
      <List
        className="max-h-64 overflow-y-auto"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item
            className={`px-4 py-3 cursor-pointer hover:bg-gray-50 m ${!item.read ? "bg-blue-50" : ""}`}
            onClick={() => handleMarkAsRead(item.id)}
          >
            <div className="flex items-start space-x-3 w-full">
              {!item.read && <Badge status="processing" className="mt-1 p-1" />}
              <div className="flex-1">
                <Text className={!item.read ? "font-medium " : "pl-2"}>{item.message}</Text>
                <div className="text-xs text-gray-500 mt-1 pl-2">{item.time}</div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default NotificationDropdown
