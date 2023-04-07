import React, { useState, useRef } from "react";
import { Box, Tab } from "@mui/material";
import "../App.css";
// Typography,Button,TextField,InputAdornment,MenuItem,Stack,ToggleButton,IconButton,
import BackTop from "./BackTop";
export const TitleScreen = (props) => {
	const home = useRef(null);
	const services = useRef(null);
	const aboutUs = useRef(null);
	const appointment = useRef(null);
	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<div>
			<BackTop />
			<div>
				<button onClick={() => scrollToSection(home)}>home </button>
				<button onClick={() => scrollToSection(services)}>
					services
				</button>
				<button onClick={() => scrollToSection(aboutUs)}>
					about us{" "}
				</button>
				<button onClick={() => scrollToSection(appointment)}>
					make an appointment
				</button>
			</div>
			<div>
				<h1
					ref={home}
					style={{ height: "600px", backgroundColor: "red" }}
				>
					home
				</h1>
				<h1
					ref={services}
					style={{ height: "600px", backgroundColor: "blue" }}
				>
					services
				</h1>
				<h1
					ref={aboutUs}
					style={{ height: "600px", backgroundColor: "green" }}
				>
					about us
				</h1>
				<h1
					ref={appointment}
					style={{ height: "600px", backgroundColor: "purple" }}
				>
					make an appointment{" "}
				</h1>
			</div>
		</div>
	);
};
