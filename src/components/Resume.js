import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'
import Resumedd from "./_Resumecjup.pdf"




const Resume = () => {


    return (
        <div className="row mt-5 text-center">

            <div className="container  ">
                <div className=" col " style={{ height: "400px" }}>
                    <div style={{ height: "350px" }}> <iframe src="https://drive.google.com/file/d/1Yyw7dPu-hV1S0igYcJT25MBq7AO_67GY/preview" width="640" height="480" allow="autoplay"></iframe></div>





                    <div className="m-4"><a href={Resumedd} download className="btn btn-primary">Download</a></div>
                </div>


                <Link to="/" className="btn  mt-4 btn-warning ">Go Back To Home</Link>



            </div>
        </div>


    )
}
export default (Resume)