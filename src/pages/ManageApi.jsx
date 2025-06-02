import { Table, Tag , Card } from "antd"


const mockData = Array.from({ length: 9 }, (_, index) => ({
  key: index,
  name: "ZTest Sample EndpointAPI",
  version: "V1",
  title: "Sample API Endpoint",
  description: "This is a sample endpoint for demonstration purposes.",
  endpoint: "/b2b2b/v1/ztest/",
  type: "Public API",
  id: "GuXtehubRauKkCA9+yKo...",
  status: "Running",
  credits: 1000,
}))

const ManageAPIs = () => {
  const columns = [
    {
      title: (
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          API NAME
          <br />& VERSION
        </span>
      ),
      dataIndex: "name",
      key: "name",
      width: "15%",
      render: (text, record) => (
        <div className="space-y-1">
          <div className="font-medium text-gray-900 text-sm">{record.name}</div>
          <div className="text-gray-600 text-sm">{record.version}</div>
        </div>
      ),
    },
    {
      title: <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">META DATA</span>,
      key: "metadata",
      width: "25%",
      render: (_, record) => (
        <div className="space-y-2">
          <div>
            <div className="text-xs font-medium text-blue-600 mb-1">Title</div>
            <div className="text-sm text-gray-900">{record.title}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-blue-600 mb-1">Description</div>
            <div className="text-sm text-gray-600">{record.description}</div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          ENDPOINT URL,
          <br />
          TYPE & ID
        </span>
      ),
      key: "endpoint",
      width: "25%",
      render: (_, record) => (
        <div className="space-y-1">
          <div className="text-sm text-gray-900 font-mono">{record.endpoint}</div>
          <div className="text-sm text-gray-600">{record.type}</div>
          <div className="text-sm text-gray-500 font-mono">{record.id}</div>
        </div>
      ),
    },
    {
      title: (
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          RUNTIME
          <br />
          STATUS
        </span>
      ),
      dataIndex: "status",
      key: "status",
      width: "15%",
      align: "center",
      render: (status) => (
        <Tag color="success" className="border-0 bg-green-100 text-green-700 px-3 py-1 rounded-md font-medium">
          {status}
        </Tag>
      ),
    },
    {
      title: <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">CREDITS PER CALL</span>,
      key: "credits",
      width: "20%",
      align: "center",
      render: (_, record) => (
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">DEFAULT</div>
          <div className="text-sm font-semibold text-gray-900">{record.credits}</div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Card >
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={false}
          className="bg-white rounded-lg shadow-sm"
          rowClassName="hover:bg-gray-50"
          showHeader={true}
          size="large"
          bordered={false}
        />
      </Card>
    </div>
  )
}

export default ManageAPIs
