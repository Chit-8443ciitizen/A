import React from 'react';
import img_01 from '../../assets/images/feature01.png'
import img_02 from '../../assets/images/feature02.png'
import img_03 from '../../assets/images/feature03.png';

const title_01 = "Check out your monthly summary with a glance.";
const content_01 = "Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.";
const title_02 = "Control your expenses and save money.";
const subcontent02_1 = "Molestie eget non libero viverra vitae nibh.";
const subcontent02_2 = "Aliquam in sollicitudin sem."
const content_02 = "Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.";
const title_03 = "Group bills? No problem, you can split it.";
const content_03 = "Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.";

function Feature() { 
  return (
    <div className='w-full h-[210vh] bg-white px-20'>

        <div className='w-full h-[40vh] flex flex-row items-center justify-center py-[40vh]'>
            <div className='w-1/2 h-auto text-black space-y-5' >
                <h2 className='text-3xl w-3/5 '>{title_01}</h2>
                <p className='w-[70%]'>{content_01}</p>
            </div>
            <img src={img_01} alt="" className='w-1/2 h-auto ' />
        </div> 

        <div className='w-full h-[40vh] flex flex-row items-center justify-center py-[30vh]'>          
            <img src={img_02} alt="" className='w-1/2 h-auto ' />
            <div className='w-1/2 h-auto text-black space-y-5' >
                <h2 className='text-3xl w-3/5 '>{title_02}</h2>
                <p className='w-[70%]'>{content_02}</p>
                <div className='flex flex-col space-y-3'>
                    <p className='flex items-center justify-start'>
                        <div className='bg-[#4CBD97] rounded-xl w-7 h-7 mr-[1vw] flex justify-center items-center'>
                            <span className="material-symbols-outlined  ">
                            arrow_right
                            </span>
                        </div>
                        {subcontent02_1}
                    </p>
                    <p className='flex items-center justify-start'>
                        <div className='bg-[#4CBD97] rounded-xl w-7 h-7 mr-[1vw] flex justify-center items-center'>
                            <span className="material-symbols-outlined  ">
                            arrow_right
                            </span>
                        </div>
                        {subcontent02_2}
                    </p>
                </div>
            </div>
        </div> 

        <div className='w-full h-[40vh] flex flex-row items-center justify-center py-[35vh]'>
            <div className='w-1/2 h-auto text-black space-y-5' >
                <h2 className='text-3xl w-3/5 '>{title_03}</h2>
                <p className='w-[70%]'>{content_03}</p>
            </div>
            <img src={img_03} alt="" className='w-1/2 h-auto ' />
        </div> 
    </div>
  )
}

export default Feature