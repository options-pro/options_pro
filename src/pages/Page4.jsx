import { useState } from "react";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";
import { useGetOiQuery } from "../services/optionsApi";
// import oiData from "../data/oiData.json";
import { symbols } from "../data/dummyLinks";
import { Select } from "antd";
import { ColorRing } from "react-loader-spinner";

const { Option } = Select;

const Page4 = () => {
  const stockOptions = Object.values(symbols);
  const [stockName, setStockName] = useState("tcs");

  const { currentMode } = useStateContext();
  const { data: oiData, isFetching } = useGetOiQuery(stockName);
  if (isFetching) {
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
        />
      </div>
    );
  }
  // console.log(data);

  // console.log(stockName);

  // console.log(oiData);
  // console.log(currentMode);

  const series = [
    {
      name: "Call Options",
      type: "column",
      data: oiData ? oiData?.map((item) => item.OPEN_INT_CE) : [],
    },
    {
      name: "Put Options",
      type: "column",
      data: oiData ? oiData?.map((item) => item.OPEN_INT_PE) : [],
    },
  ];

  const options = {
    theme: {
      mode: currentMode === "Dark" ? "dark" : "light",
    },
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: "Open Interest Analysis",
      align: "center",
      offsetX: 20,
      style: {
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
    xaxis: {
      categories: oiData ? oiData?.map((item) => item.STRIKE_PR) : [],
      labels: {
        rotate: -75,
        rotateAlways: true,
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          text: "Call Options",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#008FFB",
          },
        },
        // tooltip: {
        //   enabled: true,
        // },
      },
      {
        seriesName: "Put Options",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "Put Options",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: "#00E396",
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "center",
      offsetX: 20,
      fontSize: "20px",
      fontFamily: "Times New Roman",
      fontWeight: 600,
    },
  };

  return (
    <div className="m-2 dark:bg-secondary-dark-bg md:m-14 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex flex-row items-center justify-between">
        <p className="text-4xl font-extrabold tracking-tight text-blue-900 dark:text-white mb-10">
          Options Dashboard
        </p>
        <Select
          showSearch
          value={stockName.toUpperCase()}
          className="w-[180px] font-bold dark:text-black mb-4"
          placeholder="Select a Stock"
          optionFilterProp="children"
          onChange={(value) => setStockName(value.toLowerCase())}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {/* <Option value="TCS">TCS</Option> */}
          {stockOptions?.map((stock, index) => (
            <Option key={index} value={stock}>
              {stock}
            </Option>
          ))}
        </Select>
      </div>
      <Chart
        options={options}
        series={series}
        type="line"
        // width={800}
        height={600}
        className={`dark:text-white`}
      />
    </div>
  );
};

export default Page4;
