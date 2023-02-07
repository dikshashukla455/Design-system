import { useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "./UtilityFunction";

function Color() {
	const [searchColor, setsearchColor] = useState("p100"); // setting the state of the color based on the user input (initially p100)
	const oncolorhandler = (e) => {
		setsearchColor(e.target.value); // getting the value of the input
	};
	const ColorProperty = getThemeColor(searchColor); // getting the category of the color by their colorcode
	return (
		<>
			{/* input field created for taking the user input */}
			<input type="text" onChange={oncolorhandler} />
			<h3 style={{ color: `${colors[ColorProperty][searchColor]}` }}>
				{" "}
				{/* accessing the color */}
				Hello World
			</h3>
			{searchColor}{" "}
			{/* showing the colorCode passed by the user through input (optional) */}
		</>
	);
}

export default Color;
