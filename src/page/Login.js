import React from 'react'
import Template from '../components/Template'
import loginimg from '../assets/login.png'

const Login = ({setisloggedin}) => {
  return (
   <Template
    tittle= "welcome back X"
    desc1=  "build skill tday" 
    desc2= "education to future proof"
    formtype="Login"
    image={loginimg}
    setisloggedin={setisloggedin}
      />
  )
}

export default Login