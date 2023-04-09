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
const OurServices = () => {
	return (
		<div>
			<div
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.7)",
					marginTop: "30px",
					color: "black",
				}}
			>
				<Typography variant="h3">
					{" "}
					<strong>
						<i> Our Services </i>
					</strong>{" "}
				</Typography>
				<Typography variant="h4">
					{" "}
					Our cleaning plans are customized for you with no contracts,
					you can get the services you need when you need them, no
					strings attached. No matter which home cleaning services fit
					your needs, we have a cleaning plan homeowners want most,
					including:{" "}
				</Typography>

				<ul style={{ textAlign: "center" }}>
					<h2>
						<i>
							<li>
								Cleaning and dusting surfaces such as furniture,
								floors, and countertops
							</li>
						</i>
					</h2>
					<h2>
						<li>Sweeping, vacuuming and mopping floors</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>Washing and putting away dishes</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>
							Doing laundry (washing, ironing, folding, and
							putting away clothes)
						</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>Dusting and cleaning windows</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>Making beds</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>
							Cleaning bathrooms (toilets, sinks, and showers or
							bathtubs)
						</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>Organizing and decluttering rooms</li>
					</h2>
					<h2 style={{ marginTop: "20px" }}>
						<li>Taking out the garbage and recycling</li>
					</h2>
					<h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
						<li>Watering plants and gardening.</li>
					</h2>
				</ul>
			</div>
		</div>
	);
};

export default OurServices;
