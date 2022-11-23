import React from "react";
import symbols from "../data/symbols";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import axios from "axios";
import Button from "@mui/material/Button";
import InformationAlert from "../different alert messages/information";
import ReactApexChart from "react-apexcharts";
// import { ExpandLess } from "@mui/icons-material";
import ReactLoading from "react-loading";
import optionsOI from "../data/optionsOI";
import { useStateContext } from "../contexts/ContextProvider";

const Page6 = () => {
  const { currentMode } = useStateContext();
  const [symbol, setSymbol] = useState(symbols[0].value);
  const [loading, setLoading] = useState(true);
  // const [url, seturl] = useState("http://localhost:8000/getexpirydate/");
  const [dates, setDates] = useState([]);
  const [dateSelected, setDate] = useState("");
  const [nothing, setnothing] = useState(false);
  const [graph, setGraph] = useState(false);
  const [series, setSeries] = useState([
    { name: "PE", data: [] },
    { name: "CE", data: [] },
  ]);
  const [changed, madeChanged] = useState(true);

  const options = {
    theme: {
      mode: currentMode === "Dark" ? "dark" : "light",
    },
    chart: {
      type: "area",
      height: 350,
      widht: "50%",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Options Open Interest",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  const getDates = () => {
    // const date = await axios({
    //   method: "GET",
    //   url: url,
    // });
    const val = [
      {
        date: "2022-11-01",
      },
      {
        date: "2022-11-03",
      },
      {
        date: "2022-11-07",
      },
      {
        date: "2022-11-10",
      },
      {
        date: "2022-11-15",
      },
      {
        date: "2022-11-17",
      },
      {
        date: "2022-11-22",
      },
      {
        date: "2022-11-24",
      },
      {
        date: "2022-11-29",
      },
      {
        date: "2022-12-01",
      },
      {
        date: "2022-12-27",
      },
    ];
    setLoading(false);
    val.map((items) => dates.push({ value: items.date, label: items.date }));
    setDate(dates[0].value);
  };

  const getDataandPlot = () => {
    if (changed === false) {
      madeChanged(false);
    } else {
      setLoading(true);
      // const data = await axios({
      //   method: "GET",
      //   url: "http://localhost:8000/getoi/"+symbol+"/"+dateSelected,
      // })
      // const val = await data.data;

      let PE;
      let CE;
      if (symbol === "sbin") {
        PE = optionsOI[0].PE;
        CE = optionsOI[0].CE;
      } else if (symbol === "hdfcbank") {
        PE = optionsOI[1].PE;
        CE = optionsOI[1].CE;
      } else if (symbol === "tcs") {
        PE = optionsOI[2].PE;
        CE = optionsOI[2].CE;
      } else if (symbol === "hdfc") {
        PE = optionsOI[3].PE;
        CE = optionsOI[3].CE;
      }

      if (!dateSelected.endsWith("24")) {
        setnothing(true);
        setGraph(false);
      } else {
        setnothing(false);
        PE.map((items) =>
          series[0]["data"].push({
            x: new Date(items.Date.slice(0, 10)).getTime(),
            y: items["Open Interest"],
          })
        );
        CE.map((items) =>
          series[1]["data"].push({
            x: new Date(items.Date.slice(0, 10)).getTime(),
            y: items["Open Interest"],
          })
        );
        setGraph(true);
      }
      setLoading(false);
      madeChanged(false);
    }
  };

  if (loading && dates.length === 0) {
    getDates();
  }

  return (
    <div>
      <div
        style={{
          marginLeft: loading ? "48%" : 0,
          marginTop: loading ? "150px" : 0,
        }}
      >
        {loading && (
          <ReactLoading
            type="spin"
            color={currentMode === "Dark" ? "white" : "#0000ff"}
            height="50px"
            width="50px"
          />
        )}
      </div>
      <div
        className="page6"
        style={{
          marginLeft: "25px",
          marginTop: "75px",
          opacity: loading ? 0.25 : 1,
        }}
      >
        <div className="page6div1">
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "1.2rem",
              color: currentMode === "Dark" ? "white" : "black",
            }}
          >
            Select Symbol
          </h1>
          <TextField
            id="outlined-select-issue"
            select
            value={symbol}
            sx={{
              width: 200,
              bgcolor: currentMode === "Dark" ? "white" : "",
            }}
            onChange={function (e) {
              setSymbol(e.target.value);
              if (graph) {
                setSeries([
                  { name: "PE", data: [] },
                  { name: "CE", data: [] },
                ]);
                setGraph(false);
              }
              madeChanged(true);
            }}
          >
            {symbols.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="page6div2">
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "1.2rem",
              color: currentMode === "Dark" ? "white" : "black",
            }}
          >
            Select Date
          </h1>
          <TextField
            id="outlined-select-issue"
            select
            value={dateSelected}
            sx={{
              width: 200,
              bgcolor: currentMode === "Dark" ? "white" : "",
            }}
            onChange={function (e) {
              setDate(e.target.value);
              if (graph) {
                setSeries([
                  { name: "PE", data: [] },
                  { name: "CE", data: [] },
                ]);
                setGraph(false);
              }
              madeChanged(true);
            }}
          >
            {dates.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Button
          style={{
            display: "block",
            marginTop: "25px",
            color: "white",
            background: "#0000ff",
          }}
          variant="contained"
          onClick={getDataandPlot}
        >
          Get OI
        </Button>

        {nothing && <InformationAlert name="Options OI" />}
        {graph && (
          <ReactApexChart
            style={{ display: "block", marginLeft: "20px",marginRight: "20px", marginTop: "30px" }}
            options={options}
            width="95%"
            series={series}
            type="area"
            height={350}
          />
        )}
      </div>
    </div>
  );
};

export default Page6;
