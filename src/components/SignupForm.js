import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {toast } from "react-hot-toast"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const SignupForm = ({setisloggedin}) => {
    const[FormData, setFormData] = useState({
        email:"",
        firstName:"",
        lastName: "",
        confirmpassword:"",
        password: "",

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
        event.preventDefault();
        if(FormData.password != FormData.confirmpassword){
            toast.error("liked erre");
            return;
        }
       
        setisloggedin(true);
        const accdata = {
            ...FormData,
        }
        console.log("printing acct data");
        console.log(accdata);
        Navigate("/Dashboard");

    }
  return (
    <div>

        <form onSubmit={submithandler}>
            <div>
                <button>
                    student
                </button>
                <button>
                    instructor
                </button>
            </div>
            {/* first name and last name */}
           <div>
           <label>
                <p>firstName<sup>*</sup></p>
                <input
                required
                type='text'
                placeholder='enter first name'
                name='firstName'
                value={FormData.firstName}/>
            </label>

            <label>
                <p>lasttName<sup>*</sup></p>
                <input
                required
                type='text'
                placeholder='enter last name'
                name='lasttName'
                value={FormData.lasttName}/>
            </label>
           </div>

           <label>
                <p>emailaddress<sup>*</sup></p>
                <input
                required
                type='email'
                placeholder='enter email address'
                name='email'
                value={FormData.email}/>
            </label>

            <div>
            <label>
                <p>createpassword<sup>*</sup></p>
                <input
                required
                type= {showpassword ?("text"):("password")}
                placeholder='enter password'
                name='password'
                value={FormData.password}/>

             <span onClick={()=>setshowpassword((prev)=>!prev)}>
            {showpassword ? (< AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
           </span>
      
            </label>
            <label>
                <p>confirmpassword<sup>*</sup></p>
                <input
                required
                type= {showpassword ?("text"):("password")}
                placeholder='confirm password'
                name='password'
                value={FormData.password}/>

<span onClick={()=>setshowpassword((prev)=>!prev)}>
            {showpassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEyeInvisible />)}
        </span>
      
            </label>


            </div>

            <button>
                create accout
            </button>

        </form>
    </div>
  )
}

export default SignupForm