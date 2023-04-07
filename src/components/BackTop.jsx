import { useState, useEffect } from "react";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import DetailsIcon from "@mui/icons-material/Details";
const BackTop = () => {
	const [showBackToTop, setShowBackToTop] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		});
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div>
			{showBackToTop && (
				<button
					style={{
						position: "fixed",
						bottom: "15px",
						right: "20px",
						height: "70px",
						width: "70px",
						borderRadius: "50%",
						border: "2px solid black",
						cursor: "pointer",
						opacity: "0.9",
					}}
					onClick={scrollToTop}
				>
					<VerticalAlignTopIcon />
				</button>
			)}
		</div>
	);
};

export default BackTop;
