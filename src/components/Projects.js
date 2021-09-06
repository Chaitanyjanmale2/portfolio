import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import stremsnap from "./stremsnap.png";
import quotesnap from "./quotesnap.PNG"
import './style.css'
const Projects =()=>{
return(
   
    <div  className="row  text-light">
       <div className="container topmar ">
          
           <div className="  col  mb-3   border border-warning"><img src={quotesnap} className="img-fluid " alt="img"/>
               <div>
                  <h2 className="text text-center">QUALITY QUOTES</h2>
                   <h4 className="text-center">This is simple reactjs app bild with react hooks and two apis one unspalsh api and one random quote api(also Bootstrap is used) </h4>
                </div>
           </div>   
           <div  className="col mb-3 text-center">
               <div className="btn btn-warning text-dark"><a href="https://qualityquotes.netlify.app/">go to above project</a></div>
            </div>
           <div className="col mb-3 border border-warning"><img src={stremsnap} className="img-fluid" alt="img"/>
              <div>
                <h2 className="text text-center">Twich-clone</h2>
                <h4 className="text-center">This is simple reactjs app bild with redux hooks and also have google auth02 (senamatic ui) </h4>
              </div>
           </div>
           <div  className="col text-center">
               <div className="btn btn-warning text-dark"><a href="https://github.com/Chaitanyjanmale2/TWICH-CLONE">go to above project</a></div>
            </div>
        
          <div className="col text-center"> <Link to="/" className="btn   btn-warning mt-4 mb-4">Go Back To Home</Link></div>
       </div>

         
    </div>
)
}
export default (Projects)