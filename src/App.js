import { Routes, Route } from "react-router-dom"
import { Layout, ConfigProvider } from "antd"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import B2B from "./pages/B2b"

const { Content } = Layout

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7879F1", 
        },
      }}
    >
      <Layout className="min-h-screen">
        <Sidebar />
        <Layout>
          <Header />
          <Content className="bg-gray-50">
            <div className="p-6">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<B2B />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
