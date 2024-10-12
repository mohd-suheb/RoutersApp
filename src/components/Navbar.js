import React from "react"
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

const Navbar =(props)=>{
  let isloggedin = props.isloggedin;
  let setisloggedin = props.setisloggedin;
    return (
        <div className="flex justify-evenly items-center gap-x-6 w-11/12 max-w[1160] py-4 mx-auto">
            <Link>
            <img src = {logo} width ={160} height = {45} loading = "lazy"/>
            </Link>
          

            <nav className="ml-3">
            <ul className="flex gap-3 text-white">
             <li>
                <Link to ="/">
                Home
                </Link>
             </li>
             <li>
                <Link to = "about">
                about
                </Link>
             </li>
             <li>
                <Link to = "Dashboard">
                Dashboard
                </Link>
             </li>
            </ul>
           </nav>

           {/* four button */}

           <div className="flex gap-2 items-center">
            {!isloggedin &&
             <Link to = "/login">
               <button className=" bg-black  text-white py-[12px] px-[8px]
                 rounded-[8px]"> 
                Log in
             </button>
             </Link>
            }
           
           {  !isloggedin &&
             <Link to ="/Signup">
             <button className=" bg-black 	text-white py-[12px] px-[8px]
                 border-slate-800 rounded-[8px] ">
              
            
                Sign up
             </button>
             </Link>
            }
             {  isloggedin &&
             <Link to ="/">
             <button onClick={()=>
              {
                setisloggedin(false);
                toast.success("toast liked");
              }
                
             } className=" text-white py-[12px] px-[8px]
                bg-black rounded-[8px]">
                Log out
             </button>
             </Link>
            }
             {isloggedin &&
             <Link to= "/Dashboard">
             <button className=" text-white py-[12px] px-[8px]
              bg-black rounded-[8px]">
             
             
                Dashboard
             </button>
             </Link>
            }
           </div>

        </div>
    )
}

export default Navbar;