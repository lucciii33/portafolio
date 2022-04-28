import React from "react";
import { Link } from "react-router-dom";
import { MdSettingsAccessibility, MdAttachEmail } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { RiCodeSSlashFill, RiComputerFill } from "react-icons/ri"

export const Sidebar = () => {
	return (
		<nav className="" style={{backgroundColor: "#4825C7"}}>
			<div className="sidebar ">

			<div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className="icon" href='#home'><ImHome size={30}/></a>
			{/* </Link> */}
			</div>
			
			<div className="containerIcon ">
			{/* <Link to="/aboutme" className="text-decoration-none" > */}
			<a className="icon" href='#about'><MdSettingsAccessibility size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className="icon" href='#cards'><RiComputerFill size={30}/></a>
			{/* </Link> */}
			</div>

			<div className="containerIcon  ">
			{/* <Link to="/Cards" className=" text-decoration-none"> */}
			<a className="icon" href='#tools'><RiCodeSSlashFill size={30}/></a>
			{/* </Link> */}
			</div>


			
            <div className="containerIcon ">
			{/* <Link to="/" className="text-decoration-none"> */}
			<a className="icon" href='#contact'><MdAttachEmail size={30}/></a>
			{/* </Link> */}
			</div>
			</div>
			
		</nav>
	);
};
