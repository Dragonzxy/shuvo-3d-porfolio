import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(1000, 50); 


const About = () => {

  const textRef = useRef();
  const aboutRef=useRef();






// main animation
  useEffect(()=>{





  const aboutEl= aboutRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:aboutEl,
        start:"top top",
        pinSpacing:true,
        end:"+=550%",
        pin:true,
        scrub:1,
   
      }
    })



tl.fromTo(".text", 
  {
 
    webkitBackgroundClip: "text"
  }, 
  {
    fontSize:"500px",
   webkitTextStroke:"0",
  opacity:0
  }
);
tl.fromTo(".maskImg",{
  opacity:0,
scale:1,
color:"transparent",
webkitTextFillColor:"transparent",
webkitBackgroundClip:"text",
  duration:.1
},{
  opacity:1,
  scale:1,

  
},{
opacity:1,

})



       return () => {
    tl.scrollTrigger.kill();
    tl.kill();
   }
  },[])
  return (
    <section className="about" ref={aboutRef}>
      
 <div className="text" ref={textRef} 
 style={{
  backgroundImage:"url(/dev.webp)",
  webkitBackgroundFillColor: "transparent",
  backgroundAttachment:"fixed",
  backgroundPosition:"center",
   webkitTextStroke:"1px grey",
  backgroundSize:"auto",
  backgroundRepeat:"no-repeat"
 }}>
Mehedi Hasan Shuvo
 </div>
   <span>keep scrolling</span>
 <img src="/dev.webp" alt="" className='maskImg'/>
    </section>
  )
}

export default About








