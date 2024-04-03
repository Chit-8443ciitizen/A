import './nav.css';
// import bgImg from '../../assets/images/milad-fakurian-nY14Fs8pxT8-unsplash.jpg';\
const brandName = "vibrant."
interface ButtonExit {
  exist: boolean
}
const Nav = ({exist}: ButtonExit) => {
  return (
    <>
      <div className="w-full h-[10vh] flex flex-row items-center justify-between bg-transparent py-2 px-[3vw] m-0">
       <h1 className='animate-character font-extrabold tracking-tighter text-4xl'>{brandName}</h1>
       <div className='flex flex-row justify-between items-center space-x-[3vw]  
       tracking-wider text-white text-[17px] '>
          <p>Home</p>
          <p>FAQ</p>
          <p>Blog</p>
          { exist ? 
            (<button className='bg-white w-40 px-2 py-1 rounded-md text-black tracking-wider hover:bg-purple-800 hover:text-white duration-200 ease-in-out'>Buy now!</button>)
            : null
          } 
          
          
        </div>
      </div>
    </>
  );
};

export default Nav;
