import React, { useState } from "react";
import StockChart from "../components/StockChart";
import Features from "../components/Features";
import { Select } from "antd";
const { Option } = Select;

const stocks = ["nifty", "sbi", "bajaj", "icici"];

const HomePage = () => {
  const [newsCategory, setNewsCategory] = useState("Nifty");
  return (
    <div className="flex xl:flex-row flex-col items-center xl:gap-4 gap-5 p-10">
      <div className="chart-container p-5 pr-10 xl:border-r-4 xl:border-gray-200">
        <div>
          <Select
            showSearch
            className="w-[180px]"
            placeholder="Select a Stock"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Nifty">Nifty</Option>
            {stocks?.map((stock) => (
              <Option value={stock}>{stock}</Option>
            ))}
          </Select>
        </div>
        <StockChart />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
