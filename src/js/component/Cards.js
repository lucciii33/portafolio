import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
export const Cards = () => {
	return (
		<div className="" style={{backgroundColor: "#4825C7"}}>
			<div className="text-center">
			 <h2 className='title' id="cards">Projects</h2>

			</div>
		<div className="d-flex flex-wrap con d-flex justify-content-center">
		<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)", margin: "35px", padding: "0px", borderRadius: '15px'}}>
		<div className="conta">
			<div className="card ">
				<div className="content text-center">
					<h2>01</h2>
					<h3>The drink link</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
					<a className="btn btn-outline-light">see more</a>
				</div>
			</div>
		</div>
		</Tilt>
		<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)",padding: "0px", margin: "35px",borderRadius: '15px'}}>
		<div className="conta" >
			<div className="card">
				<div className="content text-center">
					<h2>02</h2>
					<h3>Formula 1 shop</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
					<a className="btn btn-outline-light">see more</a>
				</div>
			</div>
		</div>
		</Tilt>
		<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)",padding: "0px", margin: "35px",borderRadius: '15px'}}>
		<div className="conta">
			<div className="card">
				<div className="content text-center">
					<h2>03</h2>
					<h3>News blog</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
					<a className="btn btn-outline-light">see more</a>
				</div>
			</div>
		</div></Tilt>
		
		</div>
		</div>
		
	);
};
