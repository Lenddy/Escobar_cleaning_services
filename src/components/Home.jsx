import React from "react";
import {
	Box,
	Tab,
	Button,
	Stack,
	Typography,
	TextField,
	InputAdornment,
	MenuItem,
	ToggleButton,
	IconButton,
} from "@mui/material";

const Home = () => {
	return (
		<div
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.7)",
				marginTop: "30px",
				color: "black",
			}}
		>
			<div>
				<Typography variant="h3">
					<strong>
						{" "}
						<i>
							{" "}
							Are you tired of spending your weekends cleaning
							your home?
						</i>
					</strong>
				</Typography>
			</div>

			<Typography variant="h4">
				Let our professional cleaning service take care of the dirty
				work for you! Our team is dedicated to providing the highest
				quality cleaning services to our clients, ensuring their homes
				are fresh, clean and inviting. We offer a wide range of
				customized cleaning services to fit your unique needs and
				budget. From general cleaning tasks like dusting and vacuuming
				to deep cleaning services like shampooing carpets and scrubbing
				tile grout, we do it all. With our cleaning service, you can
				enjoy your free time doing the things you love knowing your home
				is in great hands. Contact us today to schedule your first
				cleaning appointment and experience the peace of mind that comes
				with having a clean and organized home.
			</Typography>
		</div>
	);
};

export default Home;
