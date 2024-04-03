interface BoxContent{
  title: string,
  sub_title: string,
  price: string,
  contents: Contents[],
  // bg_img : string
}
interface Contents {
  content: string
}

const BoxClick04 = (boxContent : BoxContent)=> {
  return (
    <div className='bgImg w-[30vw] h-auto hover:border-2 hover:border-gray-400 rounded-2xl 
      space-y-[4vh] p-[40px] text-white'
   >
      <h2 className='text-start text-[43px]  '>{boxContent.title}</h2> 
      <p className='text-start text-[19px] '>{boxContent.sub_title}</p> 
      <p className='text-start text-[50px] flex flex-row items-center text-white' >${boxContent.price} <span className='ml-5 text-[24px] text-[#b0b7c7]'>/mon</span></p>
      <button className='bg-white w-4/5 px-2 py-1 rounded-md text-black  tracking-wider  hover:bg-purple-800  hover:text-white duration-200 ease-in-out'>Try For Free</button>

      <ul className=''>
        {boxContent.contents.map( (item, index)=>(
          <li key={index} className='text-start text-[16px] flex my-5'>
            <div className='bg-[#4CBD97] rounded-xl w-7 h-7 mr-[1vw] flex justify-center items-center'>
                <span className="material-symbols-outlined  ">
                arrow_right
                </span>
            </div>
            {item.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default BoxClick04