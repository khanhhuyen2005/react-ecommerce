import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Example from './LoginRegister';
// import React, { useState } from 'react';



const Login = ({ carts }: any) => {
    
    return (
        <div className='md:flex hidden items-center font-normal text-xs'>
            <div className='mx-4'>
                <Example />
            </div>

            <div className=' bg-slate-200 w-[1px] h-[50%] ' />
            <div className='mx-4' ><RepeatIcon className='text-gray-800' /></div>
            <div className=' bg-slate-200 w-[2px] h-[50%] ' />
            <div className='mx-4'>
                <FavoriteBorderIcon />
            </div>
            <div className=' bg-slate-200 w-[1px] h-[50%]' />
            <div className='mx-4'>
                <LocalMallIcon className='text-gray-500' />
                <span className='bg-red-500 p-2 rounded-full text-white'>{carts.length}</span>
            </div>

            

        </div>
    )
}

export default Login;