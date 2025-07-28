import React from 'react'
import "./Home.css"
// import man from "../../assets/man.png"
import mohitavi from '../../assets/mohitavi.png'
// import TypingEffect from "react-typing-effect"
import { Typewriter } from 'react-simple-typewriter';

import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
function Home() {

useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <div id="home">
<div className="lefthome">
<div className="homedetails">
    <div className="line1">I'M</div>
    <div className="line2">Mohit Kumar</div>
    <div className="line3">
       <Typewriter
      words={['WEB DEVELOPER', 'SOFTWARE DEVELOPER', ]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
    </div>
    {/* <button>HIRE ME</button> */}
    <div className="home-buttons">
  <a href="#contact" className="hire-btn">Hire Me</a>
  <a href="/MohitKumar_Resume.pdf" download className="resume-btn">Download Resume</a>
</div>


</div>
</div>
<div className="righthome">
    <img src={mohitavi} alt="" />
</div>
    </div>
  )
}

export default Home


// import React from 'react';
// import './Home.css';
// import mohitavi from '../../assets/mohitavi.png';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// function Home() {
//   useGSAP(() => {
//     let tl1 = gsap.timeline();
//     tl1.from('.line1', { y: 80, duration: 1, opacity: 0 })
//       .from('.line2', { y: 80, duration: 1, opacity: 0 })
//       .from('.line3', { y: 80, duration: 1, opacity: 0 })
//       .from('.hire-btn', { scale: 0.8, opacity: 0, duration: 0.6 }, "-=0.5")
//       .from('.righthome img', { x: 200, duration: 1, opacity: 0 }, "-=0.8");
//   });

//   return (
//     <div id="home">
//       <div className="lefthome">
//         <div className="homedetails">
//           <div className="line1">Hi, I’m</div>
//           <div className="line2">
//             <span className="name-highlight">Mohit Kumar</span>
//           </div>
//           <div className="line3">A Passionate MERN Stack Developer</div>
//           <button className="hire-btn">Hire Me</button>
//         </div>
//       </div>
//       <div className="righthome">
//         <img src={mohitavi} alt="Mohit Kumar Avatar" />
//       </div>
//     </div>
//   );
// }

// export default Home;
