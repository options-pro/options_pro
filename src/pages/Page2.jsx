import { Table } from "antd";
import React from "react";
import { IoMdCalendar } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { GiFunnel } from "react-icons/gi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    render: (_, { symbol }) => (
      <>
        {symbol?.map((sym, index) => (
          <div key={index} className="flex flex-col justify-center text-lg">
            <p>{sym.sym}</p>

            <p>
              <span className="text-blue-600">Lot:</span> {sym.lotsize}
            </p>
          </div>
        ))}
      </>
    ),
  },
  {
    title: "OI Trend",
    dataIndex: "oiTrend",
    key: "oiTrend",
    render: (text) => (
      <div className="flex flex-row items-center justify-start gap-2 text-lg">
        {true && <span className="text-blue-500">Agg. </span>}
        {text === "New Short" || text === "Long Cover" ? (
          <p className="text-red-500">{text}</p>
        ) : (
          <p className="text-green-500">{text}</p>
        )}
      </div>
    ),
  },
  {
    title: "Spot Price",
    dataIndex: "spotPrice",
    key: "spotPrice",
    render: (_, { spotPrice }) => (
      <div className="flex flex-col">
        <div>
          <p className="text-black text-lg">{spotPrice?.price}</p>
        </div>
        <div className="text-lg">
          {spotPrice?.change > 0 ? (
            <div className="flex items-center gap-1">
              <GoTriangleUp color="green" />
              <p className="text-green-500">
                {Math.abs(spotPrice.change).toFixed(1)}%
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <GoTriangleDown color="red" />
              <p className="text-red-500">
                {Math.abs(spotPrice.change).toFixed(1)}%
              </p>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Cum. Open Interest",
    key: "coi",
    dataIndex: "coi",
    render: (_, { coi }) => (
      <div className="flex flex-col">
        <div>
          <p className="text-black text-lg">{coi?.price}</p>
        </div>
        <div className="text-lg">
          {coi?.change > 0 ? (
            <div className="flex items-center gap-1">
              <GoTriangleUp color="green" />
              <p className="text-green-500">
                {Math.abs(coi.change).toFixed(1)}%
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <GoTriangleDown color="red" />
              <p className="text-red-500">{Math.abs(coi.change).toFixed(1)}%</p>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Vol & Del",
    key: "vad",
    dataIndex: "vad",
    render: (_, { vad }) => (
      <div className="flex flex-col text-lg">
        <div>
          {vad?.first > 0 ? (
            <div className="flex items-center gap-1">
              <p className="text-blue-500">{Math.abs(vad.first).toFixed(1)}x</p>
              <BsArrowUp color="green" />
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <p>{Math.abs(vad.first).toFixed(1)}x</p>
              <BsArrowDown color="red" />
            </div>
          )}
        </div>
        <div>
          {vad?.second > 0 ? (
            <div className="flex items-center gap-1">
              <p className="text-blue-500">
                {Math.abs(vad.second).toFixed(1)}x
              </p>
              <BsArrowUp color="green" />
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <p>{Math.abs(vad.second).toFixed(1)}x</p>
              <BsArrowDown color="red" />
            </div>
          )}
        </div>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    symbol: [{ sym: "INDIACEM", lotsize: "2,900" }],
    oiTrend: "New Short",
    spotPrice: { price: "266.10", change: -1.6 },
    coi: { price: "19,676,500", change: 30.5 },
    vad: { first: 3.0, second: 2.4 },
  },
  {
    key: "2",
    symbol: [{ sym: "VEDL", lotsize: "1,500" }],
    oiTrend: "Long Cover",
    spotPrice: { price: "290.75", change: -7.5 },
    coi: { price: "29,990,950", change: -16.2 },
    vad: { first: 1.4, second: 1.7 },
  },
  {
    key: "3",
    symbol: [{ sym: "DELTACORP", lotsize: "2,300" }],
    oiTrend: "New Long",
    spotPrice: { price: "225.55", change: 1.8 },
    coi: { price: "19,814,500", change: 12.5 },
    vad: { first: 7.8, second: 3.6 },
  },
  {
    key: "4",
    symbol: [{ sym: "ACC", lotsize: "250" }],
    oiTrend: "Long Cover",
    spotPrice: { price: "2,611.50", change: -5.0 },
    coi: { price: "4,706,000", change: -11.0 },
    vad: { first: -0.9, second: -1.0 },
  },
];

const titleFunction = () => {
  const today = new Date();
  const todayArray = today.toString().split(" ").slice(0, 4);
  const reqString = `${todayArray[0]}, ${todayArray[2]} ${todayArray[1]} ${todayArray[3]}`;

  return (
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-row items-center gap-2">
        <IoMdCalendar size={25} color={"#2b079e"} />
        <p className="font-bold text-lg text-[#2b079e]">{reqString}</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <MdDownload size={25} color={"rgb(43, 7, 158)"} />
        <GiFunnel size={25} color={"rgb(43, 7, 158)"} />
      </div>
    </div>
  );
};

const Page2 = () => (
  <div className="flex flex-col p-10 justify-center m-auto">
    <Table
      className="mt-10"
      columns={columns}
      dataSource={data}
      pagination={true}
      title={titleFunction}
    />
  </div>
);

export default Page2;
