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
		<h1 style={{ color: `${colors.colorCode}` }}>
			{children} {colorCode}
		</h1>
	);
};
// h2
export const Heading2 = ({ color, children }) => {
	const colorCode = getThemeColor(color);
	return (
		<h2 style={{ color: `${colors.colorCode}` }}>
			{children} {colorCode}
		</h2>
	);
};
// h3
export const Heading3 = ({ color, children }) => <h3 style={{}}>{children}</h3>;
// h4
export const Heading4 = ({ color, children }) => <h4 style={{}}>{children}</h4>;
// h5
export const Heading5 = ({ color, children }) => <h5 style={{}}>{children}</h5>;
