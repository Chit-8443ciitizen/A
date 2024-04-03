import './home.css';
import Nav from '../Nav/nav';
import BoxClick1 from '../../shared/boxClick01';
import Banner from '../Banner/Banner';
import logo_Airtable from '../../assets/images/logo_airtable.png'
import logo_Framer from '../../assets/images/logo_Framber.jpg'
import logo_Asana from '../../assets/images/logo_Asana.png'
import logo_Mailchimp from '../../assets/images/logo_Mailchimp.jpg'
import Feature from '../Feature/feature';
import BoxClick2 from '../../shared/boxClick02/boxClick02';
import PeopleSay from '../peopleSay/PeopleSay';
import Ready from '../Ready/Ready';
import Footer from '../Footer/Footer';

function Home() {
  return <>
    <div className='flex flex-col h-[800vh]'>
      <div className='w-full h-[143vh] bgImg'>
        
          <Nav exist={true} />
          <BoxClick1/>
          <Banner/>
       
       
      </div>
    
      <div className='w-full h-[10vh] bg-[#0A0A0A] flex flex-row items-center justify-center space-x-16 py-14'>
        <img src={logo_Airtable} alt="" className='w-[123px]' />
        <img src={logo_Framer} alt="" className='w-[123px]' />
        <img src={logo_Asana} alt="" className='w-[123px]' />
        <img src={logo_Mailchimp} alt="" className='w-[123px]' />
      </div>

      <Feature/>
      <BoxClick2/> 
      <PeopleSay/>
      <Ready/> <hr />
      <Footer/>
    </div>
  </>
}

export default Home