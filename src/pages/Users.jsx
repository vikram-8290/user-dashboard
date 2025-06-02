"use client"
import { useEffect, useState } from "react"
import { Table, Button, Card, Tag } from "antd"
import { PlusOutlined, MailOutlined, PhoneOutlined, CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { setUsers } from "../store/userSlice"
import AddUserModal from "../components/AddUserModal"
import Dashboard from "./Dashboard"
import SearchBar from "../components/Search"

const Users = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  const [modalVisible, setModalVisible] = useState(false)
  const [expandedRowKeys, setExpandedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        const usersWithUsage = response.data.map((user) => ({
          ...user,
          usage: {
            projects: Math.floor(Math.random() * 10),
            logins: Math.floor(Math.random() * 50),
            lastLogin: "2025-05-31",
          },
        }))

        dispatch(setUsers(usersWithUsage))
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [dispatch])

  const toggleUsage = (record) => {
    const isExpanded = expandedRowKeys.includes(record.id)
    setExpandedRowKeys(
      isExpanded ? expandedRowKeys.filter((key) => key !== record.id) : [...expandedRowKeys, record.id]
    )
  }
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const columns = [
    {
      title: "Manager",
      dataIndex: "user",
      key: "manager",
      render: (_, record) => (
        <div>
          <div className="font-medium text-gray-900">{record.name}</div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <MailOutlined className="text-xs" />
            {record.email}
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <PhoneOutlined className="text-xs" />
            {record.phone}
          </div>
        </div>
      ),
    },
    {
      title: "Subscription Start Date",
      key: "subscriptionDate",
      render: () => <div>January 25, 2002</div>,
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Tag color={record.id % 3 === 0 ? "red" : "green"}>
          {record.id % 3 === 0 ? "Inactive" : "Active"}
        </Tag>
      ),
    },
    {
  title: "View Usage",
  key: "viewUsage",
  render: (_, record) => (
    <Button
      onClick={() => toggleUsage(record)}
      className="bg-[#F1F4FF] text-[#325CFB] px-4 py-1 rounded-md flex items-center gap-1 border-[#F1F4FF] border"
    >
      {expandedRowKeys.includes(record.id) ? (
        <>
          Hide Usage <CaretUpOutlined  className="text-[#19379E]" />
        </>
      ) : (
        <>
          View Usage <CaretDownOutlined className="text-[#19379E]" />
        </>
      )}
    </Button>
  ),
}
  ]

  return (
    <div className="space-y-6">
      <Card >
        <div className="flex items-center justify-between mb-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <Button
            onClick={() => setModalVisible(true)}
            icon={<PlusOutlined className="text-[#7879F1]" />}
            style={{ backgroundColor: '#7879F121', border: 'none' }}
            className="text-[#7879F1]"
          >
            Add User
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={filteredUsers}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
          }}
          className="border rounded-lg"
          expandable={{
            expandedRowRender: (record) => (
              <div className="text-sm text-gray-700">
                <Dashboard person={record.usage} />
              </div>
            ),
            expandedRowKeys,
            onExpand: (expanded, record) => toggleUsage(record),
          }}
        />
      </Card>

      <AddUserModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default Users
