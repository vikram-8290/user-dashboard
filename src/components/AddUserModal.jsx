"use client"
import { Modal, Form, Input, Button, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { addUserToStore } from "../store/userSlice"
import { X } from "lucide-react"

const AddUserModal = ({ visible, onClose }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  const handleSubmit = (values) => {
    const newUser = {
      ...values,
      id: users.length + 1,
      usage: {
        projects: Math.floor(Math.random() * 10),
        logins: Math.floor(Math.random() * 100),
        lastLogin: "2025-05-31",
      },
    }

    dispatch(addUserToStore(newUser))
    message.success("User added successfully!")
    form.resetFields()
    onClose()
  }

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={550}
      className="rounded-3xl"
      styles={{
        content: {
          borderRadius: "24px",
          padding: 0,
        },
      }}
      closeIcon={null}
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 m-0">Add a User</h2>
            <X size={24} className="cursor-pointer text-gray-600" onClick={onClose}  />
        </div>

        <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-6">
          <Form.Item
            name="name"
            label={
              <span className="text-gray-700 font-medium">
                Name
              </span>
            }
            rules={[{ required: true, message: "Please enter name" }]}
            className="mb-6"
          >
            <Input
              placeholder="Savannah Nguyen"
              className="h-12 rounded-xl border-gray-200 text-gray-600"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <span className="text-gray-700 font-medium">
                Email
              </span>
            }
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Please enter valid email" },
            ]}
            className="mb-6"
          >
            <Input
              placeholder="sara.cruz@example.com"
              className="h-12 rounded-xl border-gray-200 text-gray-600"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={<span className="text-gray-700 font-medium">Phone number</span>}
            className="mb-6"
          >
            <Input
              placeholder="+1 (555) 123-4567"
              className="h-12 rounded-xl border-gray-200 text-gray-600"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            name="referenceId"
            label={<span className="text-gray-700 font-medium">Reference ID</span>}
            className="mb-8"
          >
            <Input
              placeholder="O-Auth"
              className="h-12 rounded-xl border-gray-200 text-gray-600"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <div className="pt-4">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-14 rounded-xl text-white font-medium text-lg"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default AddUserModal
