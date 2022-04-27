import React from "react";
import Spline from '@splinetool/react-spline';
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar";

export const Home = () => (
	<div className=" " style={{ backgroundColor: "#4825C7" }}>
		<div className="text-center">

			<h1 className="title" id="home"><strong>Angelo Maiele</strong></h1>
			<h2 className="title">Full Stack Developer</h2>
		</div>
		<div className="d-flex">
				<Sidebar></Sidebar>
			<div className="objd">
				<Spline scene="https://draft.spline.design/uvJOtbhWwMjTaT5S/scene.spline" />
			</div>
		</div>
	</div>
);
