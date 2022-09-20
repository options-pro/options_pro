import React, { useEffect, useState } from "react";
import { chartData, data } from "../data/chartData";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";
// import { useGetStocksQuery } from "../services/stockApi";
import { stockOptions, symbols } from "../data/dummyLinks";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const StockChart = () => {
  const { currentMode } = useStateContext();
  // const [stockSymbol, setStockSymbol] = useState("SBIN.NS");
  const [price, setPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);
  // const [series, setSeries] = useState([
  //   {
  //     data: [],
  //   },
  // ]);

  // const { data, isFetching } = useGetStocksQuery({
  //   symbol: "AMRN",
  // });

  // if (isFetching) console.log("Loading...");
  // console.log(data);

  // const options = {
  //   method: "GET",
  //   url: "https://yh-finance.p.rapidapi.com/stock/v3/get-chart",
  //   params: {
  //     interval: "5m",
  //     symbol: "SBIN.NS",
  //     range: "1d",
  //     region: "IN",
  //     includePrePost: "false",
  //     useYfid: "true",
  //     includeAdjustedClose: "true",
  //     events: "capitalGain,div,split",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
  //     "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  //   },
  // };

  // async function getStonks() {
  //   const response = await axios(options);
  //   return response.data;
  // }

  // const round = (number) => {
  //   return number ? +number.toFixed(2) : null;
  // };

  chartData.options = {
    theme: {
      mode: currentMode === "Dark" ? "dark" : "light",
    },
    chart: {
      type: "candlestick",
      // background: "#000",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        // theme: true,
        enabled: true,
      },
    },
  };

  // useEffect(() => {
  //   // let timeoutId;

  //   getStonks().then((data) => {
  //     const gme = data.chart.result[0];
  //     console.log(gme);
  //     setPrice("$" + gme.meta.regularMarketPrice.toFixed(2));
  //     setPriceTime(new Date(gme.meta.regularMarketTime * 1000));
  //     const quote = gme.indicators.quote[0];
  //     const prices = gme.timestamp.map((timestamp, index) => ({
  //       x: new Date(timestamp * 1000),
  //       y: [
  //         round(quote.open[index]),
  //         round(quote.high[index]),
  //         round(quote.low[index]),
  //         round(quote.close[index]),
  //       ],
  //     }));
  //     setSeries([
  //       {
  //         data: prices,
  //       },
  //     ]);
  //   });
  // }, []);

  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className="pl-2 pb-5">
        <p className="font-bold text-5xl text-blue-900 dark:text-white">
          See Your Favorite Stocks
        </p>
      </div>
      <div>
        <Select
          showSearch
          className="w-[180px] font-bold dark:text-black"
          placeholder="Select a Stock"
          optionFilterProp="children"
          // onChange={(value) => setStockSymbol(symbols[value])}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {/* <Option value="NIFTY">NIFTY</Option> */}
          {stockOptions?.map((stock, index) => (
            <Option key={index} value={stock}>
              {stock}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        {/* {price}
      <br />
      {priceTime && priceTime.toLocaleTimeString()} */}
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="candlestick"
          width="700px"
          className={`dark:text-white`}
        />
      </div>
    </div>
  );
};

export default StockChart;
