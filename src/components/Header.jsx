import { Layout, Badge, Dropdown, Button, Avatar } from "antd"
import { BellOutlined, UserOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"
import NotificationDropdown from "./NotificationDropDown"

const { Header: AntHeader } = Layout

const Header = () => {
  const { unreadCount } = useSelector((state) => state.notifications)

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Logout",
    },
  ]

  return (
    <AntHeader className="bg-white shadow-sm px-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold mb-4">B2B</h1>
      <div className="ml-auto flex items-center gap-8">
        <Dropdown overlay={<NotificationDropdown style={{ width: 300 }} />} trigger={["click"]} placement="bottomRight">
          <Badge count={unreadCount} size="small">
            <Button
              type="text"
              icon={<BellOutlined className="text-2xl" />}
              className="flex items-center justify-center"
              />
          </Badge>
        </Dropdown>

       <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
    <div className="relative inline-block cursor-pointer">
      <Avatar
        icon={<UserOutlined />}
        className="bg-purple-100 text-purple-700"
      />
      <span
        className="
          top-10
          absolute 
          bottom-0 
          right-0 
          block 
          h-2.5 
          w-2.5 
          rounded-full 
          bg-green-500 
          ring-2 
          ring-white
        "
      />
    </div>
  </Dropdown>
      </div>
    </AntHeader>
              
  )
}

export default Header
