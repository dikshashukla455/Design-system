import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";

// h1
export const Heading1 = ({ color, children }) => {
    console.log(colors);
	const colorCode = getThemeColor(color);
    console.log(colorCode);
	return (
		<h1 style={{ color: `${colors[colorCode][color]}` }}>
			{children} {colorCode}
		</h1>
	);
};
// h2
export const Heading2 = ({ color, children }) => {
	const colorCode = getThemeColor(color);
	return (
		<h2 style={{ color: `${colors[colorCode][color]}` }}>
			{children} {colorCode}
		</h2>
	);
};
// h3
export const Heading3 = ({ color, children }) => {
	const colorCode = getThemeColor(color);
	return (
		<h3 style={{ color: `${colors[colorCode][color]}` }}>
			{children} {colorCode}
		</h3>
	);
};
// h4
export const Heading4 = ({ color, children }) => {
	const colorCode = getThemeColor(color);
	return (
		<h4 style={{ color: `${colors[colorCode][color]}` }}>
			{children} {colorCode}
		</h4>
	);
};
// h5
export const Heading5 = ({ color, children }) => {
	const colorCode = getThemeColor(color);
	return (
		<h5 style={{ color: `${colors[colorCode][color]}` }}>
			{children} {colorCode}
		</h5>
	);
};
//paragraph
export const Paragraph = ({ color, children, fontSize, textTransform }) => {
	const colorCode = getThemeColor(color);
	return (
		<p style={{ color: `${colors[colorCode][color]}`, fontSize:`${fontSize}` , textTransform:`${textTransform}` }}>
			{children}
		</p>
	);
};