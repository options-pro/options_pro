import React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SellIcon from "@mui/icons-material/Sell";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ScaleIcon from "@mui/icons-material/Scale";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InputAdornment } from "@mui/material";
import Alert from "../components/Alert";
// import { AnimatableComponent } from "react-native-animatable";
// import * as Animatable from "react-native-animatable"
// import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import Slide from "@mui/material/Slide";
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import { useStateContext } from "../contexts/ContextProvider";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: "none",
  backgroundColor: "#1E3A8A",
  boxShadow: "none",
}));

const Page1 = () => {
  const [radio, setRadio] = useState("shortstraddle");
  const [selPut, setSelPut] = useState("");
  const [selCall, setSelCall] = useState("");
  const [buyPut, setBuyPut] = useState("");
  const [buyCall, setBuyCall] = useState("");
  const [entry, setentry] = useState("");
  const [exit, setexit] = useState("");
  const [lotSize, setlotsize] = useState("");
  const [submit, setSubmit] = useState(false);
  const [popUp, savePopUp] = useState(false);
  const closeModal = () => savePopUp(false);
  const [data, setData] = useState("");
  const [checked, setChecked] = React.useState(false);
  const { currentMode } = useStateContext();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const submitFun = async () => {
    setSubmit(true);
    if (
      selPut === "" ||
      selCall === "" ||
      buyPut === "" ||
      entry === "" ||
      exit === "" ||
      lotSize === ""
    ) {
      return;
    } else {
      
      const date = await axios({
        method: "GET",
        url:
          "https://optionbacktesting.herokuapp.com/" +
          radio +
          "/?sellPut=" +
          selPut +
          "&sellCall=" +
          selCall +
          "&buyCall=" +
          buyCall +
          "&buyPut=" +
          buyPut +
          "&entry=" +
          entry +
          "&exit=" +
          exit +
          "&lotSize=" +
          lotSize,
      });
      const val = await date.data;
      setData(val);
      savePopUp(true);
      setChecked(true);
      setSubmit(false);
    }
  };

  return (
    <div>
      <div
        className="page1"
        style={{
          marginLeft: "25px",
          marginTop: "75px",
          marginRight: "25px",
          opacity: popUp === true ? "0.25" : "1",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "40px",
                      color: "white",
                    }}
                  >
                    Sell Put
                  </h1>
                  <TextField
                    required
                    id="outlined-required"
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setSelPut(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SellIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && selPut === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "40px",
                      color: "white",
                    }}
                  >
                    Sell Call
                  </h1>
                  <TextField
                    required
                    id="outlined-required"
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setSelCall(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CallMadeIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && selCall === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "40px",
                      color: "white",
                    }}
                  >
                    Buy Put
                  </h1>
                  <TextField
                    required
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setBuyPut(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ShoppingBagIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && buyPut === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "40px",
                      color: "white",
                    }}
                  >
                    Buy Call
                  </h1>
                  <TextField
                    required
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setBuyCall(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CallReceivedIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && buyCall === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "60px",
                      color: "white",
                    }}
                  >
                    Entry
                  </h1>
                  <TextField
                    required
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setentry(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LoginIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && entry === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "70px",
                      color: "white",
                    }}
                  >
                    Exit
                  </h1>
                  <TextField
                    required
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setexit(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LogoutIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && exit === "" && <Alert />}
              </Item>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Item>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h1
                    style={{
                      display: "inline-block",
                      fontSize: "1.2rem",
                      marginTop: "20px",
                      marginRight: "40px",
                      color: "white",
                    }}
                  >
                    Lot Size
                  </h1>
                  <TextField
                    required
                    autoComplete="off"
                    sx={{
                      border: "solid white 2px",
                      borderRadius: "5%",
                      input: { color: "white" },
                    }}
                    style={{ width: 100, marginTop: 10, marginBottom: 10 }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setSubmit(false);
                      setlotsize(e.target.value);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ScaleIcon style={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {submit && lotSize === "" && <Alert />}
              </Item>
            </Grid>
          </Grid>
        </Box>

        <div style={{ marginTop: "20px" }}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="output"
              name="output"
              defaultValue="Index"
              value={radio}
              onChange={(e) => {
                setRadio(e.target.value);
              }}
              row
            >
              <FormControlLabel
                value="shortstraddle"
                style={{
                  color: currentMode === "Dark" ? "white" : "black",
                }}
                control={
                  <Radio
                    style={{
                      color: currentMode === "Dark" ? "white" : "#1E3A8A",
                    }}
                  />
                }
                label="Short Straddle"
              />
              <FormControlLabel
                value="ironcondor"
                style={{
                  color: currentMode === "Dark" ? "white" : "black",
                }}
                control={
                  <Radio
                    style={{
                      color: currentMode === "Dark" ? "white" : "#1E3A8A",
                    }}
                  />
                }
                label="Iron Condor"
              />
              <FormControlLabel
                value="shortstrangle"
                style={{
                  color: currentMode === "Dark" ? "white" : "black",
                }}
                control={
                  <Radio
                    style={{
                      color: currentMode === "Dark" ? "white" : "#1E3A8A",
                    }}
                  />
                }
                label="Short Strangle"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Button
            style={{
              backgroundColor: "#1E3A8A",
              marginTop: "1.8rem",
              marginLeft: "1%",
              padding: "15px",
              marginBottom: "1.8rem"
            }}
            type="submit"
            onClick={submitFun}
          >
            <span
              className="mainComponentSubmitText"
              style={{ color: "white" }}
            >
              Submit{" "}
              <CheckCircleIcon style={{ marginLeft: "10px", color: "white" }} />
            </span>
          </Button>
        </div>
      </div>

      {popUp && (
        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          <div
            id="slide"
            style={{
              position: "absolute",
              top: "20%",
              left: "30px",
              right: "25px",
              backgroundColor: "#1E3A8A",
              padding: "75px",
              borderRadius: "15%",
            }}
          >
            <CloseIcon fontSize="medium" style={{color: "white", position: "absolute", top: "10px", left: "10px"}} onClick={() => {
              <Switch checked={checked} onChange={handleChange} />
              savePopUp(false)}}/>
              <h1 style={{color: "white", fontWeight:"bold", fontSize: "15px"}}>Profit/Loss for Month1 is : {data['1']}</h1>
              <h1 style={{color: "white", fontWeight:"bold", fontSize: "15px"}}>Profit/Loss for Month2 is : {data['2']}</h1>
              <h1 style={{color: "white", fontWeight:"bold", fontSize: "15px"}}>Profit/Loss for Month3 is : {data['3']}</h1>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Page1;
