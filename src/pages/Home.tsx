import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import "../assets/css/Global.css"
import ServicesSection from '../components/ServicesSection'
import VideoSection from '../components/VideoSection'
function Home() {
  return (
	<>
    
    <Navbar/>
    <Hero/>
    <ServicesSection/>  
    <VideoSection/>

  </>
  )
}

export default Home