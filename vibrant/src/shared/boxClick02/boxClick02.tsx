import React from 'react'
import './boxClick02.css'
import banner from '../../assets/images/banner2.png'
const contentBox = '*No credit card requires';
const titleBox = 'Download the app and start today!';

function BoxClick2() {
  return (
    <div className='w-[90vw] h-[90vh] mx-auto bgImg rounded-xl bg-center pl-10 relative
    overflow-hidden mb-10'>
        <div className='flex flex-col w-1/2 h-full text-white pl-10 items-start 
          justify-center space-y-4'>
          <h1 className='w-[30vw] text-[46px]' >{titleBox}</h1>
          <button className='flex flex-row items-center justify-center bg-purple-500 w-[12vw] p-1 text-[18px] tracking-wider px-2 rounded-md text-white font-normal 
          hover:bg-purple-800 hover:font-semibold duration-200 ease-in-out'>
              Buy now!
              <span className="w-5 material-symbols-outlined">
                  arrow_right
              </span>
          </button>
          <p className='w-2/5  text-[12px] font-light tracking-wide'>{contentBox}</p>
            
        </div>
        <img src={banner} alt="" className='absolute w-3/5 h-auto top-[15vh] right-[-8vw]'/>
    </div>
  )
}

export default BoxClick2