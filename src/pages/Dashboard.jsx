"use client"

import { useState } from "react"
import { Card, Button, Select, Tag, Table, Progress } from "antd"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import Vector from "../../src/icons/Vector.png"
import Error from "../../src/icons/error.png"
import Response from "../../src/icons/response.png"
import { DownloadOutlined } from "@ant-design/icons"

const { Option } = Select

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today")
  const [selectedMonth, setSelectedMonth] = useState("august")

  const chartData = [
    { date: "July 31", value: 300 },
    { date: "Aug 3", value: 400 },
    { date: "Aug 5", value: 350 },
    { date: "Aug 8", value: 300 },
    { date: "Aug 10", value: 280 },
    { date: "Aug 13", value: 250 },
    { date: "Aug 15", value: 500 },
    { date: "Aug 18", value: 550 },
    { date: "Aug 20", value: 450 },
    { date: "Aug 23", value: 650 },
    { date: "Aug 25", value: 600 },
    { date: "Aug 28", value: 550 },
    { date: "Aug 30", value: 850 },
  ]

  const rechargeHistory = [
    { 
      key: 1,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Success" 
    },
    { 
      key: 2,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Success" 
    },
    { 
      key: 3,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Failed" 
    },
    { 
      key: 4,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Failed" 
    },
    { 
      key: 5,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Success" 
    },
    { 
      key: 6,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Success" 
    },
    { 
      key: 7,
      date: "OCTOBER 5, 2023", 
      time: "12:20", 
      amount: "$ 0.00", 
      status: "Success" 
    },
  ]

  const columns = [
    {
      title: 'PURCHASE DATE',
      dataIndex: 'date',
      key: 'date',
      className: 'text-sm font-medium text-gray-600',
    },
    {
      title: 'PURCHASE TIME',
      dataIndex: 'time',
      key: 'time',
      className: 'text-sm font-medium text-gray-600',
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
      className: 'text-sm font-medium text-gray-600',
    },
    {
      title: 'RECHARGE STATUS',
      dataIndex: 'status',
      key: 'status',
      className: 'text-sm font-medium text-gray-600',
      render: (status) => (
        <Tag color={status === 'Success' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'DOWNLOAD INVOICE',
      key: 'download',
      className: 'text-sm font-medium text-gray-600',
      render: (_, record) => (
        record.status === 'Success' ? (
          <Button 
            type="link" 
            icon={<DownloadOutlined/>} 
            className="text-blue-600 p-0"
          >
            DOWNLOAD INVOICE
          </Button>
        ) : null
      ),
    },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet Balance</h3>
          <div className="text-4xl font-bold text-gray-900 mb-4">$24</div>
           <Progress percent={30} showInfo={false} strokeColor="#7879F1"  className="mt-2 mb-2"/>
          <div className="text-xs text-gray-600 text-right mt-auto">AMOUNT AFTER LAST RECHARGE: $54</div>
        </Card>

        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
            <Select 
              value={selectedPeriod} 
              onChange={setSelectedPeriod}
              className="w-24"
            >
              <Option value="today">Today</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img src={Vector} alt="Vector Icon" className="w-10 h-10 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-1">TOTAL CALLS</div>
              <div className="text-3xl font-bold text-gray-900">50K</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                
                <img src={Error} alt="Error Icon" className="w-10 h-10 ml-2" />
              </div>
              <div className="text-sm text-gray-600 mb-1">ERROR RATES</div>
              <div className="text-3xl font-bold text-gray-900">0.2</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img src={Response} alt="Response Icon" className="w-10 h-10 ml-2" />
              </div>
              <div className="text-sm text-gray-600 mb-1">AVG. RESPONSE TIME</div>
              <div className="text-3xl font-bold text-gray-900">0.2 s</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Wallet Consumption Chart */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Wallet Consumption</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Select month</span>
            <Select 
              value={selectedMonth} 
              onChange={setSelectedMonth}
              className="w-32"
            >
              <Option value="august">August</Option>
              <Option value="september">September</Option>
              <Option value="october">October</Option>
            </Select>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                domain={[0, 1000]}
                tickFormatter={(value) => `$${value}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Wallet Recharge History */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Wallet Recharge History</h3>
        <Table 
          columns={columns} 
          dataSource={rechargeHistory} 
          pagination={false}
          className="w-full"
        />
      </Card>
    </div>
  )
}

export default Dashboard
