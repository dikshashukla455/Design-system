import React from "react";
import { colors } from "../Data/ColorData";
import { ButtonType } from "../colors/UtilityFunction";

function Button({ textColor, children, type, variant, width, rounded, fontSize }) {
	const btnTransparency = variant === "transparent" ? "buttonNone" : ""; // styling for the transparent button variant
	const btnOutlined = variant === "outlined" ? "buttonOutline" : ""; // styling for the outlined button variant
	return (
		<>
			<button
				style={{
					color: `${textColor ? colors[textColor] : "white"}`, // if the user passed different color through the prop else the default color is white
					backgroundColor: `${ButtonType(type)}`,
					fontSize: `${fontSize}`,
					width: `${width}`,
					borderRadius: `${rounded ? "50px" : ""}`,
				}}
				className={`${btnTransparency} ${btnOutlined}`} // classes for transparent and outlined button variant
			>
				{/* user passed data */}
				{children}
			</button>
		</>
	);
}

export default Button;
