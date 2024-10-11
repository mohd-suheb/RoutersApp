import react, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Dashboard from "./page/Dashboard";
import Home from "./page/Home";

function App(){

  const [isloggedin, setisloggedin] = useState(false);

  return(
    <div>
    <Navbar isloggedin={isloggedin} setisloggedin = {setisloggedin}/>

    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "login" element ={<Login setisloggedin={setisloggedin}/>}/>
      <Route path = "Signup" element ={<Signup setisloggedin={setisloggedin}/>}/>
      <Route path = "Dashboard" element ={<Dashboard/>}/>
    </Routes>
    </div>
  )
}

export default App;