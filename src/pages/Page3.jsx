import React from "react";
import Chart from "react-apexcharts";
import { useStateContext } from "../contexts/ContextProvider";
import futuresData from "../data/futuresData.json";
// import {
//   useGetShortLongBuildUpQuery,
//   useGetTopLongBuildUpQuery,
//   useGetTopLongCoverQuery,
//   useGetTopOiGainersQuery,
//   useGetTopOiLosersQuery,
//   useGetTopShortCoverQuery,
// } from "../services/futuresApi";

const Page3 = () => {
  const { currentMode } = useStateContext();
  // const { data: topGainers, isFetching } = useGetTopOiGainersQuery();
  // if (isFetching) console.log("loading...");

  // console.log(topGainers);

  const topPriceGainersData = {
    series: [
      {
        data: futuresData.topPriceGainers.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topPriceGainers.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Price Gainers",
        align: "center",
        floating: true,
      },
    },
  };

  const topPriceLosersData = {
    series: [
      {
        data: futuresData.topPriceLosers.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "end",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topPriceLosers.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Price Losers",
        align: "center",
        floating: true,
      },
    },
  };
  const topOiLosersData = {
    series: [
      {
        data: futuresData.topOiLosers.map((data) => data["%_OI_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topOiLosers.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top OI Losers",
        align: "center",
        floating: true,
      },
    },
  };
  const topOiGainersData = {
    series: [
      {
        data: futuresData.topOiGainers.map((data) => data["%_OI_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topOiGainers.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top OI Gainers",
        align: "center",
        floating: true,
      },
    },
  };
  const topLongBuildUps = {
    series: [
      {
        name: "%_OI_change",
        data: futuresData.topLb.map((data) => data["%_OI_change"]),
      },
      {
        name: "%_Price_change",
        data: futuresData.topLb.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topLb.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Long Build Ups",
        align: "center",
        floating: true,
      },
    },
  };
  const topShortCovering = {
    series: [
      {
        name: "%_OI_change",
        data: futuresData.topSc.map((data) => data["%_OI_change"]),
      },
      {
        name: "%_Price_change",
        data: futuresData.topSc.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topSc.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Short Covering",
        align: "center",
        floating: true,
      },
    },
  };

  const topShortBuildUp = {
    series: [
      {
        name: "%_OI_change",
        data: futuresData.topSb.map((data) => data["%_OI_change"]),
      },
      {
        name: "%_Price_change",
        data: futuresData.topSb.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topSb.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Short Build Ups",
        align: "center",
        floating: true,
      },
    },
  };

  const topLongCovering = {
    series: [
      {
        name: "%_OI_change",
        data: futuresData.topLc.map((data) => data["%_OI_change"]),
      },
      {
        name: "%_Price_change",
        data: futuresData.topLc.map((data) => data["%_Price_change"]),
      },
    ],
    options: {
      theme: {
        mode: currentMode === "Dark" ? "dark" : "light",
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#000"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
      },
      xaxis: {
        categories: futuresData.topLc.map((data) => data.SYMBOL),
      },
      title: {
        text: "Top Long Unwinding",
        align: "center",
        floating: true,
      },
    },
  };

  return (
    <div className="flex flex-col p-10">
      <div className="mt-5">
        <p className="text-4xl font-extrabold tracking-tight text-blue-900 dark:text-white">
          Futures Dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-3 mt-10">
        <div>
          <Chart
            options={topPriceGainersData.options}
            series={topPriceGainersData.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topPriceLosersData.options}
            series={topPriceLosersData.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topOiGainersData.options}
            series={topOiGainersData.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topOiLosersData.options}
            series={topOiLosersData.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topLongBuildUps.options}
            series={topLongBuildUps.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topShortCovering.options}
            series={topShortCovering.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topShortBuildUp.options}
            series={topShortBuildUp.series}
            type="bar"
            height={300}
          />
        </div>
        <div>
          <Chart
            options={topLongCovering.options}
            series={topLongCovering.series}
            type="bar"
            height={300}
          />
        </div>
      </div>
      {/* <div className="flex mt-5 flex-row flex-wrap items-center justify-center gap-2 lg:gap-4 sm:gap-1">
        {charts.map((chart, index) => (
          <div
            key={index}
            className="m-2 p-2 bg-white dark:bg-secondary-dark-bg rounded-3xl"
          >
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              height={200}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Page3;
