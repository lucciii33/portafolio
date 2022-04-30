import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdSettingsAccessibility, MdAttachEmail } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { RiCodeSSlashFill, RiComputerFill } from "react-icons/ri"

export const Sidebar = () => {
	const [colorButton, setColorButton] = useState("iconState");
	const [colorButton1, setColorButton1] = useState("iconState");
	const [colorButton2, setColorButton2] = useState("iconState");
	const [colorButton3, setColorButton3] = useState("iconState");
	const [colorButton4, setColorButton4] = useState("iconState");
	return (
		<nav className="" style={{backgroundColor: "#4825C7"}}>
			<div className="sidebar ">

			<div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className={colorButton=="iconState" && colorButton1=="icon" || colorButton2=="icon"?"iconState":"icon" } onClick={()=>{
				setColorButton("icon"); setColorButton2("icon"); setColorButton3("icon")
			}} href='#home'><ImHome size={30}/></a>
			{/* </Link> */}
			</div>
			
			<div className="containerIcon ">
			{/* <Link to="/aboutme" className="text-decoration-none" > */}
			<a className={colorButton1 == "iconState"? "icon":"iconState" } onClick={()=>{
				setColorButton1("icon");
			}} href='#about'><MdSettingsAccessibility size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className={colorButton2 == "iconState"? "icon":"iconState" } onClick={()=>{
				setColorButton2("icon");
			}} href='#cards'><RiComputerFill size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className={colorButton3 == "iconState"? "icon":"iconState" } onClick={()=>{
				setColorButton3("icon");
			}} href='#tools'><RiCodeSSlashFill size={30}/></a>
			{/* </Link> */}
			</div>


			
            <div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className={colorButton4 == "iconState"? "icon":"iconState" } onClick={()=>{
				setColorButton4("icon");
			}} href='#contact'><MdAttachEmail size={30}/></a>
			{/* </Link> */}
			</div>
			</div>
			
		</nav>
	);
};
