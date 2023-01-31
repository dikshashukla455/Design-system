import { colors } from "../Data/ColorData";
function getThemeColor(color) {
	const themeColor = {
		p: "primary",
		s: "secondary",
		t: "tertiary",
        a: "accent",
        su: "success",
        w: "warning",
        d: "danger",
        g: "grey",
        b: "black"
	};
	if (color.slice(0, 1) === "p") {
		return themeColor.p;
	}
	if (color.slice(0, 1) === "s") {
		return themeColor.s;
	}
	if (color.slice(0, 1) === "t") {
		return themeColor.t;
	}
    if (color.slice(0, 1) === "a") {
		return themeColor.a;
	}
	if (color.slice(0, 1) === "su") {
		return themeColor.su;
	}
	if (color.slice(0, 1) === "w") {
		return themeColor.w;
	}
    if (color.slice(0, 1) === "d") {
		return themeColor.d;
	}
	if (color.slice(0, 1) === "g") {
		return themeColor.g;
	}
	if (color.slice(0, 1) === "b") {
		return themeColor.b;
	}
}

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
export const Paragraph = ({ color, children, Font_size, Text_transform }) => {
	const colorCode = getThemeColor(color);
	return (
		<p style={{ color: `${colors[colorCode][color]}`, fontSize:`${Font_size}` , textTransform:`${Text_transform}` }}>
			{children}
		</p>
	);
};