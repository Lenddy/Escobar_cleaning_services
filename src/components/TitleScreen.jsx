import React, { useState, useRef } from "react";
import { Box, Tab, Button, Stack } from "@mui/material";
import "../App.css";
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
				>
					home
				</Button>
				<Button
					variant="contained"
					size="large"
					onClick={() => scrollToSection(services)}
				>
					services
				</Button>
				<Button
					variant="contained"
					size="large"
					onClick={() => scrollToSection(call)}
				>
					contact us
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
		</div>
	);
};
