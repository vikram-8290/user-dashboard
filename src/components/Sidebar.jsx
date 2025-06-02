"use client"

import { useState } from "react"
import { Layout, Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"
import HomeIcon from "../../src/icons/smart-home.png"
import Logo from "../../src/icons/main-logo.png"
import SmallLogo from "../../src/icons/small-logo.png"
import B2bIcon from "../../src/icons/box.png"
import MenuBtn from "../../src/icons/menu-btn.png"


const { Sider } = Layout

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

 const menuItems = [
  {
    key: "/dashboard",
    icon: <img src={HomeIcon} alt="Home" className="w-5 h-5" />,
    label: "Dashboard",
  },
  {
    key: "/",
    icon: <img src={B2bIcon} alt="B2b" className="w-5 h-5" />,
    label: "B2b",
  },
]

  const handleMenuClick = ({ key }) => {
    navigate(key)
  }

  return (
    <Sider
  collapsible
  collapsed={collapsed}
  onCollapse={setCollapsed}
  trigger={null}
  className="bg-white shadow-lg"
  width={250}
  breakpoint="md"         
  onBreakpoint={(broken) => {
    setCollapsed(broken)
  }}
>

      <div className="flex items-center justify-between p-4 border-b">
        {collapsed ? (
          <div className="w-full flex justify-center">
            <img src={SmallLogo} alt="Small Logo" className="h-8" onClick={() => setCollapsed(false)} />
          </div>
        ) : (
          <>
            <img src={Logo} alt="Logo" className="h-8" />

            <img src={MenuBtn} alt="Collapse Menu" className="h-6 cursor-pointer" onClick={() => setCollapsed(true)} />
          </>
        )}
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="border-none"
      />
    </Sider>
  )
}

export default Sidebar
