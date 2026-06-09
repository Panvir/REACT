import React,{useState} from 'react'
import { Link,useNavigate,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"



function Login() {
    const useNavigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState("")

    const login=async(data)=>{
        setError("")
        try {
            const session=await authService.login(data)
            if(session){
                const useData= await authService.getCurrentUser()
                if(useData) dispatch(authLogin(useData));
                Navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
        Don&apos;t have any account?&nbsp;
        <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline ' >Sign up</Link>
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label="Email: "
                placeholder="enter Ypur email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPattern: (value)=>
                             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        || "EMail addess must be valud address "
                    }
                })}
                />
                <Input 
                label="Password"
                type="password"
                placeholder="ENter Ypur password"
                {...register("password",{
                    required:true
                })}
                />
                <Button type="Submit" className="w-full" >Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default Login