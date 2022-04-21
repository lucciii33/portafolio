import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
import Spline from '@splinetool/react-spline';
export const Contact = () => {
	return (
		<div className=""style={{backgroundColor: "#4825C7"}}>
			
			{/* <div>
	 	 <Spline scene="https://draft.spline.design/12hNbkC37mRbvz2v/scene.spline" />
			</div> */}
			<div className="text-center">
			<h2 className="title">Contact me</h2>
			<input placeholder="email" className="input rounded"></input>
			<input placeholder="name" className="input rounded"></input>
			</div>
		</div>
		
	);
};
