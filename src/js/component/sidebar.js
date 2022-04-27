import React from "react";
import { Link } from "react-router-dom";
import { MdSettingsAccessibility } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { RiCodeSSlashFill } from "react-icons/ri"

export const Sidebar = () => {
	return (
		<nav className="" style={{backgroundColor: "#4825C7"}}>
			<div className="sidebar ">

			<div className="containerIcon position-relative">
			<Link to="/" className="text-decoration-none">
			<div className="icon position-absolute top-50 start-50 translate-middle"><ImHome size={30}/></div>
			</Link>
			</div>
			
			<div className="containerIcon position-relative">
			<Link to="/aboutme" className="text-decoration-none">
			<div className="icon position-absolute top-50 start-50 translate-middle" ><MdSettingsAccessibility size={30}/></div>
			</Link>
			</div>

			<div className="containerIcon position-relative">
			<Link to="/Cards" className="text-decoration-none position-absolute top-50 start-50 translate-middle">
			<div className="icon"><RiCodeSSlashFill size={30}/></div>
			</Link>
			</div>

			
            <div className="containerIcon position-relative">
			<Link to="/" className="text-decoration-none">
			<div className="icon position-absolute bottom-0 start-50 translate-middle-x"><ImHome size={30}/></div>
			</Link>
			</div>
			</div>
			
		</nav>
	);
};
