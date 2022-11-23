// import logo from "../images/logo.jpeg";
import opt_pro from "../images/opt_pro.png";
// import createOrGetUser from "../utils/index";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
// import { AiOutlineLogout } from "react-icons/ai";
// import StarIcon from "@mui/icons-material/Star";
// import LogoutIcon from "@mui/icons-material/Logout";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useStateContext } from "../contexts/ContextProvider";

const BlackSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey["A100"],
    "&:hover": {
      backgroundColor: alpha(grey[900], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey[50],
  },
}));

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const { currentMode, setCurrentMode } = useStateContext();

  // function setStyle(index) {
  //   var colorIs = "";
  //   colorIs = "Black";
  //   const elements = document.getElementsByClassName("navBarIcons");
  //   for (var i = 0; i < elements.length; i++) {
  //     if (i === index) {
  //       elements[i].style.color = colorIs;
  //       elements[i].style.boxShadow = "0px 5px 15px #00000059";
  //     }
  //   }
  // }

  // function removeStyle() {
  //   const elements = document.getElementsByClassName("navBarIcons");
  //   let colorIs;
  //   if (currentMode === "Light") colorIs = "rgb(30 58 138)";
  //   else colorIs = "White";
  //   for (var i = 0; i < elements.length; i++) {
  //     elements[i].style.color = colorIs;
  //     elements[i].style.boxShadow = "0px 0px 0px";
  //   }
  // }

  function handleChange() {
    if (currentMode === "Light") {
      setCurrentMode("Dark");
      // setCurrentMode("Dark");
    } else {
      setCurrentMode("Light");
      // setCurrentMode("Light");
    }
  }

  // function changeTheme() {
  //   if (currentMode === "Light") {
  //     console.log(currentMode);
  //     setCurrentMode("Dark");
  //   } else {
  //     console.log(currentMode);
  //     setCurrentMode("Light");
  //   }
  // }

  return (
    <div>
      <div className="relative">
        <div className="w-full pb-3 flex xl:flex-row flex-col xl:justify-end items-end xl:items-center navbar pr-3 pt-3 dark:bg-secondary-dark-bg dark:shadow-none">
          <div className="mr-3"></div>
          <p className="xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4">
            {userProfile?.userName
              ? `Welcome, ${userProfile.userName}!`
              : `Welcome!`}
          </p>
          <div title="Change theme">
            {/* <Switch
          defaultUnChecked
           onChange={handleChange}
          id="NavBarToggle" color="default"/> */}

            <BlackSwitch
              // defaultUnChecked
              onChange={handleChange}
              id="NavBarToggle"
            />
          </div>
        </div>
        <div className="options-pro-logo-container absolute top-[20px] left-[20px]">
          <Link to="/">
            <img
              src={opt_pro}
              alt="options-pro-logo"
              className="h-[100px] w-[100px] z-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
