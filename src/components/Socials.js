import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'
const Scoials =()=>{
return(
    <div className=" row m-auto ">
         <div className="container text-center p-3">
             <div className="col-12 text"><h2 className="m-4">Click TO Go To</h2></div>   
       <div className="col-12   "><a href="mailto:janmalechaitany2@gmail.com"><i className="fas colr fa-envelope-square fa-7x   "></i></a></div> 
       <div className="col-12  "> <a href="https://github.com/Chaitanyjanmale2"><i className="fab colr fa-github-square fa-7x  "></i></a></div>
       <div className="col-12  "> <a href="https://www.linkedin.com/in/chaitany-janmale-229541151"><i className="fab colr fa-linkedin fa-7x   "></i></a></div>
       <div className="col-12  "> <a href="https://instagram.com/chaitanyjanmale?utm_medium=copy_link"><i className="fab colr fa-instagram-square fa-7x   "></i></a></div>
      <div className="col-12 "> <Link to="/" className="btn   btn-warning mt-5">Go Back To Home</Link></div>
    
    </div>
    </div>
)
}
export default (Scoials)  