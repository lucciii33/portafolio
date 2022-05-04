import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdSettingsAccessibility, MdAttachEmail } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { RiCodeSSlashFill, RiComputerFill } from "react-icons/ri"

export const Sidebar = () => {
	const [colorButton, setColorButton] = useState("");
	// const [colorButton1, setColorButton1] = useState("iconState");
	// const [colorButton2, setColorButton2] = useState("iconState");
	// const [colorButton3, setColorButton3] = useState("iconState");
	// const [colorButton4, setColorButton4] = useState("iconState");
	return (
		<nav className="" style={{backgroundColor: "#4825C7"}}>
			<div className="sidebar ">

			<div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className={colorButton=="home"?"iconWhite":"icon" } onClick={()=>{
				setColorButton("home"); 
			}} href='#home'><ImHome size={30}/></a>
			{/* </Link> */}
			</div>
			
			<div className="containerIcon ">
			{/* <Link to="/aboutme" className="text-decoration-none" > */}
			<a className={colorButton=="about"?"iconWhite":"icon" } onClick={()=>{
				setColorButton("about");
			}} href='#about'><MdSettingsAccessibility size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className={colorButton=="cards"?"iconWhite":"icon" } onClick={()=>{
				setColorButton("cards");
			}} href='#cards'><RiComputerFill size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className={colorButton=="tools"?"iconWhite":"icon" } onClick={()=>{
				setColorButton("tools");
			}} href='#tools'><RiCodeSSlashFill size={30}/></a>
			{/* </Link> */}
			</div>


			
            <div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className={colorButton=="contact"?"iconWhite":"icon" } onClick={()=>{
				setColorButton("contact");
			}} href='#contact'><MdAttachEmail size={30}/></a>
			{/* </Link> */}
			</div>
			</div>
			
		</nav>
	);
};
