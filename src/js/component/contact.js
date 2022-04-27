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
			<div className="text-center">
			<h2 className="title" id="contact">Contact me</h2>
			<div className="d-flex justify-content-center" style={{backgroundColor: "#4825C7"}}>
			<div className="conta2">
			<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)",padding: "0px", margin: "35px",borderRadius: '15px'}}>
			<div className="card2 me-1 mb-4 mt-4 ms-1">
			<input placeholder="email" className="input rounded"></input>
			<input placeholder="name" className="input rounded"></input>
			<textarea placeholder="write me!"></textarea>
			</div>
			</Tilt>
			</div>
			</div>
			</div>
		</div>
		
	);
};
