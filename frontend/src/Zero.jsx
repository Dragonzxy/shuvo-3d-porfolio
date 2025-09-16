import React, { useEffect } from 'react'
import Card from "./Card"
import gsap from 'gsap'

const Zero = () => {
  useEffect(()=>{


  const tl =gsap.timeline({
    scrollTrigger:{
      trigger:".zero",
      start:"top top",
      end:"+=70%",
      scrub:3,
      pin:true,
      pinSpacing:true,
    }
  })
  return()=>{
    tl.scrollTrigger.kill()
    tl.kill()
  }
    },[])
  return (
   <section className="zero flex">
    <h1 className='absolute top-0 
    left-1/2 -translate-x-1/2 text-3xl doto font-bold'>
Skill And Expertise
    </h1>
    <Card delay={0} img={"/basic.webp"}/>
    <Card delay={.5}  img={"/react.webp"}/>
    <Card delay={1}  img={"/node.webp"}/>
    <Card delay={1.5}  img={"/thinking.webp"}/>
   </section>
  )
}

export default Zero