import React from 'react'
const contentBox = 'Vibrant is the best software platform to easily capture user feed back for your brand and products.';
const titleBox = 'Open your first crypto wallet, right now!';

function boxClick01() {
  return (
    <div className='w-full h-[40vh] mx-auto mt-[20vh] text-center text-white space-y-2'>
        <h1 className='w-2/5 m-auto text-[46px]' >{titleBox}</h1>
        <p className='w-2/5 m-auto text-[22px] font-light tracking-wide leading-[1.5] '>{contentBox}</p>
        <button className='flex flex-row m-auto items-center justify-center bg-purple-500 w-[12%] text-[22px] tracking-wider px-2 rounded-md text-white hover:bg-purple-800 hover:font-semibold duration-200 ease-in-out'>
            Buy now!
            <span className="w-5 material-symbols-outlined">
                arrow_right
            </span>
        </button>


    </div>
  )
}

export default boxClick01