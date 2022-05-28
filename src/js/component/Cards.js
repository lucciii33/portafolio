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
					<p>A place where you can find any type of cocktails, filter for different options, create your own cocktails, and more, click here to enjoy the demo</p>
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
					<p>An e-commerce of formula one clothing, an incredible project where we have made our client very happy, click here and check it out</p>
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
					<h3>PetCare</h3>
					<p>A web page where anyone who works with our 4-legged friends can create their profile showing what they do and being able to offer their clients different options, from talking about an emergency to making an appointment to take a bath</p>
					<a className="btn btn-outline-light">see more</a>
				</div>
			</div>
		</div></Tilt>
		
		</div>
		</div>
		
	);
};
