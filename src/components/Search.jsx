// components/SearchBar.jsx
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-[200px] h-[40px] rounded-lg border-5 bg-neutral-100 border-gray-500  px-2 flex items-center shadow-sm bg-white">
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        bordered={false}
        className="flex-1 text-gray-600 placeholder-gray-400"
        suffix={<SearchOutlined className="text-gray-400" />}
      />
    </div>
  )
}

export default SearchBar
