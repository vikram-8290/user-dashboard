import { Tabs } from "antd"
import Users from "./Users" 
import ManageAPIs from "./ManageApi"

const { TabPane } = Tabs

const B2B = () => {
  return (
    <div className="p-6">
      
      <Tabs defaultActiveKey="1">
        <TabPane tab="B2B API" key="1">
          <Users />
        </TabPane>
        <TabPane tab="Manage API" key="2">
          <ManageAPIs />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default B2B
