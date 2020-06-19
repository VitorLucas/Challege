
//import Login from "views/Login/Login.js";
import Home from "./layouts/Home/Home.js";
import Register from "./layouts/Register/Register.js";

const routes = [
  {
    path: "/home",
    name: "Home",       
    component: Home,
    layout: "/login"
  }, 
  {
    path: "/register",
    name: "Register",       
    component: Register,
    layout: "/register"
  }, 
  // {
  //   path: "/historic",
  //   name: "Historic",       
  //   component: Home,
  //   layout: "/historic"
  // }, 
];

export default routes;
