import { useEffect, useRef } from "react";
import  { gsap }   from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(1000, 50); 

const Hero = () => {
  const textref = useRef();
  const heroRef=useRef();
  useEffect(() => {
    const text = textref.current;
    const heroEl = heroRef.current;


   const tl= gsap.timeline({
    scrollTrigger:{

      trigger:heroEl,
      start:"top top",
      end:"+=100%",
   pinSpacingS:true,
      pin:true,
      scrub:5,
    }
    
   });
   tl.to("#video",{
    minHeight:"100%",
    minWidth:"100%",
      ease: "power3.inOut",


 
   })

   tl.fromTo(text,{
backgroundPosition:"0% 0%",
  ease: "power3.inOut",
scale:1,
 
   },
  {
backgroundPosition:"0% 0%",
  ease: "power3.inOut",
scale:2
  })
  

   return () => {
    tl.scrollTrigger.kill();
    tl.kill();
   }
  },[]);
  return (
    <section id="hero" className="hero" ref={heroRef}>
      <Header />

      <div className="empty">
        scroll down
      </div>

        <h1 className="color-change" ref={textref} >make <span>it where it</span> mattters</h1>
        <video id="video" src="/output.mp4" autoPlay loop muted></video>
    </section>



  )
}

export default Hero





