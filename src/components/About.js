import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import img from "./img.png"
import './style.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//
const About = () => {

    return (
        <div className="bg  p-4  text-light text-center">
            <img src={img} className="rounded-circle img-fluid " alt="img" />
            <h2 className='font-weight-bold text p-4 '>About Me</h2>
            <hr color="gold"></hr>
            <div className=" m-auto p-3 aboutme">
                <p className="">I am Chaitany, a 21 old computer engineering student based out of Pune, India. I am pursuing my Bachelor's of engineering in Computer Science and Engineering from ZCOER, NARHE. I have a predilection for design and enjoy working on projects where approaching design and development as co-dependent processes can lead to smarter solutions and a better overall product experience for fellow humans. If you have an exciting project in mind, or just wanna chat, get in touch with me here :)
                </p></div>
            <hr color="gold" ></hr>
            <div className="p-4 m-4"><Link to="/Resume" className="btn btn-warning font-weight-bold p-2 m-2">Resume</Link>
                <Link to="/projects" className="btn btn-warning font-weight-bold p-2 m-2">Projects</Link>
                <Link to="/Socials" className="btn btn-warning font-weight-bold p-2 m-2">Social's</Link>
            </div>

        </div>
    )

}
export default (About);