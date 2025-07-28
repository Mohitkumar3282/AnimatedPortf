import React from 'react'
import Card from '../Card/Card'
import ai from "../../assets/ai.png"
// import fw from "../../assets/fw.png"
import p from "../../assets/p.png"

import ecom from "../../assets/ecom.png"
import cb from "../../assets/cb.png"

import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="projects">
        <h1 id="para">1+ YEARS EXPERIENCED IN PROJECTS</h1>
        {/* <div className="slider">





<Card title="VIRTUAL ASSISTANT" image={v}/>

<Card title="ECOMMERCE-WEBSITE" image={ecom}/>
<Card title="AI CHATBOT" image={cb}/>
<Card title="AI TEXT TO IMAGE" image={tti}/>
<Card title="AI BACKGROUND REMOVER" image={br}/>
<Card title="IMAGE SEARCH ENGINE" image={ise}/>
        </div> */}

<div className="slider">

  <div className="project-card-wrapper">
    <Card title="VIRTUAL ASSISTANT" image={ai} />
    <div className="project-links">
      <a href="https://github.com/Mohitkumar3282/NewVirtualAs" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://mohitvirtual.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>

  <div className="project-card-wrapper">
    <Card title="ECOMMERCE-WEBSITE" image={ecom} />
    <div className="project-links">
      <a href="https://github.com/Mohitkumar3282" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://ecommerce-site.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>


  <div className="project-card-wrapper">
    <Card title="ANIMATED-PORTFOLIO" image={p} />
    <div className="project-links">
      <a href="https://github.com/Mohitkumar3282/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://ecommerce-site.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>

   <div className="project-card-wrapper">
    <Card title="Ai-codeReviewer" image={cb} />
    <div className="project-links">
      <a href="https://github.com/yourusername/ecommerce-website" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://ecommerce-site.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>

  {/* <div className="project-card-wrapper">
    <Card title="ECOMMERCE-WEBSITE" image={ecom} />
    <div className="project-links">
      <a href="https://github.com/yourusername/ecommerce-website" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://ecommerce-site.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>  */}


</div>


    </div>
  )
}

export default Projects




