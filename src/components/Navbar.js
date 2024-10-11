import React from "react"
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

const Navbar =(props)=>{
  let isloggedin = props.isloggedin;
  let setisloggedin = props.setisloggedin;
    return (
        <div className="flex justify-evenly">
            <Link>
            <img src = {logo} width ={160} height = {45} loading = "lazy"/>
            </Link>
          

            <nav className="ml-3">
            <ul className="flex space-x-4">
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

           <div className="flex gap-2">
            {!isloggedin &&
             <Link to = "/login">
             <button>
                Login
             </button>
             </Link>
            }
           
           {  !isloggedin &&
             <Link to ="/Signup">
             <button>
              
            
                Signup
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
                
             }>
                Log out
             </button>
             </Link>
            }
             {isloggedin &&
             <Link to= "/Dashboard">
             <button>
                Dashboard
             </button>
             </Link>
            }
           </div>

        </div>
    )
}

export default Navbar;