import React from "react";
import { getThemeColor } from "../colors/UtilityFunction";
import { colors } from "../Data/ColorData";
import { ButtonType } from "../colors/UtilityFunction";

function Button({ backgroundColor, color, children, type, variant }) {
	const btnTransparency = variant === "transparent" ? "buttonNone" : "";
	const btnOutlined = variant === "outlined" ? "buttonOutline" : "";
	const colorCode = color && getThemeColor(color);
	const backColorCode = backgroundColor && getThemeColor(backgroundColor);
	const customBackgroundColor = backColorCode
		? colors[backColorCode][color]
		: "";
	return (
		<>
			<button
				style={{
					color: `${colorCode ? colors[colorCode][color] : "white"}`,
					backgroundColor: `${ButtonType(type)} ${customBackgroundColor}`,
				}}
				className={`${btnTransparency} ${btnOutlined}`}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
