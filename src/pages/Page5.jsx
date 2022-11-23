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
import { useStateContext } from "../contexts/ContextProvider";
import futuresOIData from "../data/futuresOI";

const Page5 = () => {
  const { currentMode } = useStateContext();
  const [symbol, setSymbol] = useState(symbols[0].value);
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState([]);
  const [dateSelected, setDate] = useState("");
  const [nothing, setnothing] = useState(false);
  const [graph, setGraph] = useState(false);
  const [series, setSeries] = useState([{ name: "Futures OI", data: [] }]);
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
      text: "Future Open Interest",
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
      //   url: "http://localhost:8000/getfutureoi/"+symbol+"/"+dateSelected,
      // }
      let val = "";
      if (symbol === "tcs") {
        val = futuresOIData[0].Futures;
      } else if (symbol === "sbin") {
        val = futuresOIData[1].Futures;
      } else if (symbol === "hdfc") {
        val = futuresOIData[2].Futures;
      } else if (symbol === "hdfcbank") {
        val = futuresOIData[3].Futures;
      }
      if (!dateSelected.endsWith("24")) {
        setnothing(true);
        setGraph(false);
      } else {
        setnothing(false);
        val.map((items) =>
          series[0]["data"].push({
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
    <div
      className="page5"
      style={{
        marginLeft: "25px",
        marginTop: "75px",
        opacity: loading ? 0.25 : 1,
      }}
    >
      <div className="page5div1">
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
              setSeries([{ data: [] }]);
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

      <div className="page5div2">
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
              setSeries([{ data: [] }]);
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
        Get Futures OI
      </Button>

      {nothing && <InformationAlert name="Futures OI" />}
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
  );
};

// Added beautiful page5 and page6
export default Page5;
