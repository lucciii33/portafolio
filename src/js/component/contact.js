import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
import Spline from '@splinetool/react-spline';
import { useState, useContext, } from "react";
import { Context } from "../store/appContext";
export const Contact = () => {
	const { store, actions } = useContext(Context);

	const [contact, setContact] = useState({ name: "", email: "", message: "" });
	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
		console.log(contact);
	};
	return (
		<div className="" style={{ backgroundColor: "#4825C7" }}>
			<div>
				<a href="https://www.linkedin.com/in/angelo-maiele-68626333/details/experience/">
					<Spline scene="https://prod.spline.design/EZl1sN5G3qRCksA2/scene.spline" /></a>

			</div>
			<div id="contact" >
				<div className="text-center p-0" id="aboutme">
					<h2 className='title'>Contact me</h2>
				</div>
			</div>

			<div className="d-flex justify-content-center" style={{ backgroundColor: "#4825C7" }}>
				<div className="conta3" >
					<Tilt style={{ backgroundColor: "rgba(225,225,225,0.1)", borderRadius: '15px' }}>
						<div className="card3 d-flex flex-column ">
							<div className="content text-center d-grid mx-auto">
								<input type="text" 
								placeholder="Your name" 
								name="name"
								value={contact.name}
								onChange={handleChange}></input>
								<input type="text" 
								placeholder="Email"
								name="email"
								value={contact.email}
								onChange={handleChange}></input>
								<textarea placeholder="Tell me about your dream website"
								name="message"
								value={contact.message}
								onChange={handleChange}></textarea>
								<button onClick={()=>{
									actions.saveMessage(contact.email,contact.name,contact.message);
								}}>send me to back end</button>
							</div>
						</div>
					</Tilt>
				</div>
			</div>
			<br />
			<br />
		</div>

	);
};
