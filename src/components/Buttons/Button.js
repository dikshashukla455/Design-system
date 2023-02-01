import React from "react";
import { getThemeColor } from "../colors/UtilityFunction";
import { colors } from "../Data/ColorData";

function Button({ backgroundColor, color, children, type, variant }) {
	const pri = type === "primary" ? colors.primary.p400 : "";
	const sec = type === "secondary" ? colors.secondary.s400 : "";
	const ter = type === "tertiary" ? colors.tertiary.t400 : "";
	const acc = type === "accent" ? colors.accent.a400 : "";
	const suc = type === "success" ? colors.success.s400 : "";
	const war = type === "warning" ? colors.warning.w400 : "";
	const dan = type === "danger" ? colors.danger.d400 : "";
	const gry = type === "grey" ? colors.grey.g400 : "";
	const blk = type === "black" ? colors.black.b300 : "";
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
					backgroundColor: `${pri} ${sec} ${ter} ${acc} ${suc} ${war} ${dan} ${gry} ${blk} ${customBackgroundColor}`,
				}}
                className={`${btnTransparency} ${btnOutlined}`}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
