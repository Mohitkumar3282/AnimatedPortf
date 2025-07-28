import React from 'react'
import "./Card.css"
import mern from "../../assets/mern.png"
function Card({title,image}) {
  return (
    <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
        
        

    </div>
  )
}

export default Card


// import React from 'react'
// import "./Card.css"

// function Card({ title, image, github, demo }) {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
      
//       <div className="hovercard">
//         <img src={image} alt={title} />
//         <div className="card-buttons">
//           <a href={github} target="_blank" rel="noopener noreferrer">
//             <button className="card-btn">GitHub</button>
//           </a>
//           <a href={demo} target="_blank" rel="noopener noreferrer">
//             <button className="card-btn">Live Demo</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
