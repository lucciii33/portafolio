import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
import Spline from '@splinetool/react-spline';
export const Contact = () => {
	return (
		<div className=""style={{backgroundColor: "#4825C7"}}>
			<div>
             <Spline scene="https://draft.spline.design/H28o5bcqPHyD2425/scene.spline" />
            </div> 
			<div id="contact" >
			<div className="text-center p-0" id="aboutme">
			 <h2  className='title'>Contact me</h2>
			</div>
			</div>

			<div className="d-flex justify-content-center" style={{backgroundColor: "#4825C7"}}>
			<div className="conta3" >
				<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)", borderRadius: '15px' }}>
				<div className="card3 d-flex flex-column ">
				<div className="content text-center d-grid mx-auto">
				<input type="text" placeholder="Your name"></input>
				<input type="Password" placeholder="Password"></input>
				<textarea placeholder="Tell me about your dream website "></textarea>
				</div>
				</div>
		 </Tilt>
			</div>
		</div>
		</div>
		
	);
};
