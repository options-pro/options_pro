import React, { useState, useEffect } from "react";
import { chartData, data } from "../data/chartData";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";
import { useGetStocksQuery } from "../services/stockApi";
import { stockOptions, symbols } from "../data/dummyLinks";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const StockChart = () => {
  const { currentMode } = useStateContext();

  const [stockSymbol, setStockSymbol] = useState("TCS.NS");
  const [price, setPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);

  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  const { data: stocksData, isFetching } = useGetStocksQuery({
    symbol: stockSymbol,
  });

  console.log(stocksData);

  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/stock/v3/get-chart",
    params: {
      interval: "5m",
      symbol: stockSymbol,
      range: "1d",
      region: "IN",
      includePrePost: "false",
      useYfid: "true",
      includeAdjustedClose: "true",
      events: "capitalGain,div,split",
    },
    headers: {
      "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    },
  };

  async function getStonks() {
    const response = await axios(options);
    return response.data;
  }

  const round = (number) => {
    return number ? +number.toFixed(2) : null;
  };

  chartData.options = {
    theme: {
      mode: currentMode === "Dark" ? "dark" : "light",
    },
    chart: {
      type: "candlestick",
      // background: "#000",
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    title: {
      text: "",
      align: "",
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

  useEffect(() => {
    // let timeoutId;

    getStonks().then((data) => {
      const gme = data.chart.result[0];
      console.log(gme);
      setPrice("$" + gme.meta.regularMarketPrice.toFixed(2));
      setPriceTime(new Date(gme.meta.regularMarketTime * 1000));
      const quote = gme.indicators.quote[0];
      const prices = gme.timestamp.map((timestamp, index) => ({
        x: new Date(timestamp * 1000),
        y: [
          round(quote.open[index]),
          round(quote.high[index]),
          round(quote.low[index]),
          round(quote.close[index]),
        ],
      }));
      setSeries([
        {
          data: prices,
        },
      ]);
    });
  }, [stockSymbol]);

  if (isFetching)
    return (
      <div className="h-screen flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          className="mb-5"
        />
      </div>
    );

  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className="pl-2 pb-5 gap-4 flex flex-col md:items-center md:flex-row md:justify-between">
        <p className="font-bold text-5xl text-blue-900 dark:text-white">
          See Your <br /> Favorite Stocks
        </p>
        <div>
          <Select
            showSearch
            className="w-[180px] font-bold dark:text-black"
            value={stockSymbol.slice(0, -3)}
            placeholder="Select a Stock"
            optionFilterProp="children"
            onChange={(value) => setStockSymbol(symbols[value] + ".NS")}
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
      </div>
      <div>
        {/* {price}
      <br />
      {priceTime && priceTime.toLocaleTimeString()} */}
        <Chart
          options={chartData.options}
          series={series}
          type="candlestick"
          className={`dark:text-white max-w-screen-md`}
        />
      </div>
    </div>
  );
};

export default StockChart;
