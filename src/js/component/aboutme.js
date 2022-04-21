import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
export const AboutMe = () => {
	return (
		<div className="d-flex justify-content-center" style={{backgroundColor: "#4825C7"}}>
			<div className="conta2" >
				<Tilt style={{backgroundColor: "rgba(225,225,225,0.1)", borderRadius: '15px'}}>
				<div className="card2">
				<div className="content text-center">
				<h2>About me</h2>
				<p>Lorem ipsu viene otra vez y se siente feliz de estar aqui y no se que mas vegra poner aca pero tiene que ser largo pa que se vea bien y depsues marico el que lo lea</p>
				</div>
				</div>
		</Tilt>
			</div>
		</div>
		
	);
};
