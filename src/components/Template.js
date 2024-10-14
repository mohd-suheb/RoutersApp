import React from 'react'
// import Signup from '../page.js/Signup'
// import Login from '../page/Login'
import frameIimage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({tittle, desc1, desc2, image, formtype, setisloggedin}) => {
  return (
    <div>

        <div>
            <h1>{tittle}</h1>

            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup"}?
            {<SignupForm setisloggedin = {setisloggedin}/>}:
            {<LoginForm  setisloggedin = {setisloggedin}/>}

            <div>
                <div></div>
                <div>or</div>
                <div></div>
            </div>

            <button>
                sign with google
            </button>

            <div>
                <img src = {frameIimage}
                width={598}
                height={504}
                alt='pattern'
                loading='lazy'/>

         <img src = {image}
                width={598}
                height={500}
                alt='student'
                loading='lazy'/>

            </div>

        </div>



    </div>
  )
}

export default Template