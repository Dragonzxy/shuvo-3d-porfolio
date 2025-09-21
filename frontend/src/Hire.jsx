import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";


gsap.registerPlugin(ScrollTrigger);

const Hire = () => {


  const hireRef =useRef(null)
const formRef =useRef(null)
  useEffect(()=>{
    const hireEl= hireRef.current
    const formEl =formRef.current

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:hireEl,
    start:"top center",
    end:"end end",
scrub:1,

  }
})
tl.fromTo(formEl, 
  {  x: "100%", duration:1 }, 
  { opacity: 1, x: 0,display:"flex"}
);
return()=>{
  tl.scrollTrigger.kill()
  tl.kill()
}
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    // Add null checks for environment variables
    const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY;

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not properly configured");
      alert("Email service is not configured. Please check your environment variables.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        toast.success("Message sent successfully");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("error");
        }
      );
  };


  return (
    <section className="hire" id="hire" ref={hireRef}>
      <div className="lets-talk">
        lets talk <br />
        <p>weather you're looking to build a new website <br /> improve your existing platform <br />or bring a uniqe project , I am here to help </p>
      </div>
 <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="E-Mail" required />
        <textarea name="message" placeholder="Message" required id="message" />
        <input type="submit" value="Send" id="button" />
      </form>
    </section>
  );
};

export default Hire;
