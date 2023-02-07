import React from "react";
import { getThemeColor } from "../colors/UtilityFunction";
import { colors } from "../Data/ColorData";
import { ButtonType } from "../colors/UtilityFunction";

function Button({ backgroundColor, textColor, children, type, variant }) {
	const btnTransparency = variant === "transparent" ? "buttonNone" : ""; // styling for the transparent button variant
	const btnOutlined = variant === "outlined" ? "buttonOutline" : ""; // styling for the outlined button variant
	const colorCode = textColor && getThemeColor(textColor); // if the user passed different color through the prop.(text color)
	const backgroundColorCode = backgroundColor && getThemeColor(backgroundColor); // if the user passed different color through the prop.(background color)
	const customBackgroundColor = backgroundColorCode
		? colors[backgroundColorCode][textColor]
		: "";
	return (
		<>
			<button
				style={{
					color: `${colorCode ? colors[colorCode][textColor] : "white"}`, // if the user passed different color through the prop else the default color is white
					backgroundColor: `${ButtonType(type)} ${customBackgroundColor}`,
					fontSize: "16px",
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
