import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
export const AboutMe = () => {
	return (
		<div className=""style={{backgroundColor: "#4825C7"}}>
			<div id="about" >
			<div className="text-center p-0" id="aboutme">
			 <h2  className='title'>About me</h2>

			</div>
			</div>
			<div className="d-flex justify-content-center" style={{backgroundColor: "#4825C7"}}>
			<div className="conta2" >
				<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)", borderRadius: '15px'}}>
				<div className="card2">
				<div className="content text-center">
				<h2>About me</h2>
				<p>I am a very creative, passionate, and responsible full-stack developer. I have been working for one year as a freelancer and coding has really changed my life. I combine my technological skills with my hospitality knowledge, and my educational background in management allows me to be very organized, effective with my time, and multitask. The languages that I handle are Html, CSS, JavaScript, ReactJs, python, SQL, MongoDB and Node.js. I also feel very comfortable working with bootstrap, photoshop, Ant Design, Api, and more. I have a really good eyes for design coming from and artistic family.</p>
				</div>
				</div>
		 </Tilt>
			</div>
		</div>
		</div>
		
	);
};
