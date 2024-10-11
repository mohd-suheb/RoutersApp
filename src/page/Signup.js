import React from 'react'
import Signupimg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setisloggedin}) => {
  return (
   
    <Template
    tittle= "joins the milloners learining to each other study notion for free"
    desc1=  "build skill tday and tomorrow and beyond" 
    desc2= "education to future proof your-carrer"
    formtype="Login"
    image= {Signupimg}
    setisloggedin={setisloggedin}
      />
  )
}

export default Signup