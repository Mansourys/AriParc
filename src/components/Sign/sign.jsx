import React from 'react'
import './sign.css'
import LoginPage from './log'
import Back from "../common/Back"
import img from "../images/pricing.jpg"
 function Sign () {
  return (
    <>
    <section className='contact mb'>
      <Back name='Sign In' title='Create Account Or Sign In' cover={img} />
      <LoginPage/>
          
    </section>
  </>
  )
} 
export default Sign;