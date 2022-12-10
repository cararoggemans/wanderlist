
import React from 'react'
import WanderlistLogoV1 from "../../../assets/svg/wanderlist-logo-v1.svg"
import Button from "../../Button"
import Card from '../../Card';

function Login() {
  return (
    <>
    <Card/>
        <div className='logo mx-auto flex flex-wrap items-center justify-center mt-8'>
        <img className='h-12 w-auto' src={WanderlistLogoV1} alt='Wanderlist Logo' />
        <h1 className='text-xl text-xl pl-2 font-bold'>Wanderlist</h1>
        </div>
        <h2 className='text-center mt-8'>Start ticking off your travel bucket lists now</h2>
        <p className='text-center mt-6'>Explore and finish bucket lists, earn badges and follow travel adventures from your friends.</p>
        <div className='action-container mx-auto flex flex-wrap items-center justify-center mt-8'>
        <Button classes='btn btn-primary w-2/4 no-rounded-r 'buttonText='Register' />
        <Button classes='btn btn-secondary w-2/4 no-rounded-l' buttonText='Sign in'/>
        </div>
    </>
  )
}

export default Login
