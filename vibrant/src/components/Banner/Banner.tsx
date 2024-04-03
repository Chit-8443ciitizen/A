import React from 'react'
import bannerImg01 from '../../assets/images/banner01.png';
import banner2_1 from '../../assets/images/banner2-1.png';
import banner2_2 from '../../assets/images/banner2-2.jpg';

const title01 =  "Savings";
const cost01 =  "2,280,00";
const title02 =  "Split bills";
const cost02 =  "880,00";


function Banner() {
  return <>
    <div className='w-[80%] h-[73vh] m-auto relative'>
        <img src={bannerImg01} alt="" />

        <div className='w-1/5 h-auto  bg-white rounded absolute top-[-2%] right-[-5%]'>
            <p className='tracking-tighter text-[12px] p-2'>{title01}</p>      
            <h2 className='text-xl ml-2'> ${cost01}</h2>                       
            <div className=' flex -flex-row items-center justify-around pl-2'>
              <div className='w-[10px] h-[10px] rounded-full bg-slate-200 '></div>
              <div className='w-[50px] h-[10px] rounded bg-slate-200  '></div>
              <img src={banner2_1} alt="" className='w-3/5 h-[5vh]' />
            </div>
        </div>

        <div className='w-1/5 h-auto  bg-white rounded absolute bottom-[15%] left-[-5%]'>
            <div className=' flex p-2 items-center justify-between'>
              <p className='tracking-tighter text-[12px] '>{title02}</p> 
              <img src={banner2_2} alt="" className=' h-[3vh] w-10' />  
            </div>   
            <div className=' flex items-center justify-between p-2'>
              <h2 className='text-xl'> ${cost02}</h2>
              <div className='w-1/5 h-[10px] rounded-full bg-slate-200 '></div>
            </div>                     
            <div className='w-3/5 h-[10px] rounded-sm bg-slate-200  m-2'></div>
        </div>
    </div> 
      
  </>    
}
export default Banner