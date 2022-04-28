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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				</div>
		 </Tilt>
			</div>
		</div>
		</div>
		
	);
};
