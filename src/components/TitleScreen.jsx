import React, { useState, useRef } from "react";
import { Box, Tab, Button, Stack } from "@mui/material";
import logo from "../images/ESCOBAR.png";
// Typography,,TextField,InputAdornment,MenuItem,ToggleButton,IconButton,
import BackTop from "./BackTop";
import Home from "./Home";
import OurServices from "./OurServices";
import Call from "./Call";

export const TitleScreen = (props) => {
	const home = useRef(null);
	const services = useRef(null);
	const call = useRef(null);
	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<div>
			<BackTop />
			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					size="large"
					onClick={() => scrollToSection(home)}
					// style={{
					// 	width: "150px",
					// 	height: "70px",
					// }}
				>
					<h2>home</h2>
				</Button>
				<Button
					variant="contained"
					size="large"
					onClick={() => scrollToSection(services)}
				>
					<h2>services</h2>
				</Button>
				<Button
					variant="contained"
					size="large"
					onClick={() => scrollToSection(call)}
				>
					<h2>contact us</h2>
				</Button>
			</Stack>

			<div ref={home}>
				<Home />
			</div>

			<div ref={services}>
				<OurServices />
			</div>

			<div ref={call}>
				<Call />
			</div>
			<img
				src={logo}
				alt="logo"
				width={400}
				height={400}
				style={{
					backgroundColor: "white",
					marginTop: "30px",
				}}
			/>
		</div>
	);
};
