import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap/all'
import './App.css'
import './index.css'
import Hero from './Hero'
import About from './About'
import Zero from './Zero'
import Hire from './Hire'
import Footer from './Footer'
import Loader from './Loader'



const App = () => {
 const [loader, setLoader] = useState(true)

 useEffect(()=>{
  setTimeout(() => {
    setLoader(false)
  },4000);
 },[])
  return (
    <>

       {loader?<Loader />: (<>
       <Hero />
 
    <About />
   <Zero />
  <Hire />
<Footer /></>)   
}


      </>

  )
}

export default App