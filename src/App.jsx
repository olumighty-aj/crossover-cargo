import './App.css'
import { ChatBot } from './componets/chatBot/ChatBot'
import { ChooseUs } from './componets/choseus/ChooseUs'
import { Contactus } from './componets/contact-us/Contactus'
import Footer from './componets/footer/Footer'
import { Hero } from './componets/hero/Hero'
import { NavBar } from './componets/navbar/NavBar'
import { Partners } from './componets/partner-logo/Partners'
import { Quote } from './componets/quote/Quote'
import { Services } from './componets/why_us/Services'

function App() {


  return (
    <>
    <NavBar />
      <Hero />
      <Partners />
      <Services />
      <Quote />
      <ChooseUs />
      <Contactus />
      <Footer />
      <ChatBot />
      
    </>
  )
}

export default App
