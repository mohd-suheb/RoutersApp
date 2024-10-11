import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import { AiOutlineEyeInvisible } from "react-icons/ai";

import { AiOutlineEye } from "react-icons/ai";

import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setisloggedin}) => {

    const[FormData, setFormData] = useState({
        email: "", name: " ",

    })

    const Navigate = useNavigate();

    const[showpassword, setshowpassword] = useState(false);

    function clickhandler(event){
       setFormData((prevData)=>(
     {
        ...prevData,
        [event.target.name]: event.target.value,
     }
       ))
           
    }

    function submithandler(event){
        event.prevntDefault();
        setisloggedin(false);
        toast.succes("liked");
        Navigate("/");
        
        
    }
  return (
    <div>
     <form onSubmit={submithandler}>
        <label>
        <p>email Address <sup>*</sup></p>
        <input 
        type='email'
        value={FormData.email}
        placeholder='enter email addres'
        name='email'
        onChange={clickhandler}/>
        </label>

        <label>
        <p>password <sup>*</sup></p>
        <input 
        type={showpassword ?("text"):("password")}
        value={FormData.password}
        placeholder='enter email addres'
        name='password'
        onChange={clickhandler}/>
      

      <span onClick={()=>setshowpassword((prev)=>!prev)}>
            {showpassword ? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
        </span>
      

        </label>

        <Link to="/">
        <p>forgot password</p>
        
        </Link>

        <button >
            sign  in
        </button>

       
        
     </form>
    </div>
  )
}

export default LoginForm