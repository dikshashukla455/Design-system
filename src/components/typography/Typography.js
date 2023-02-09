import { colors } from "../Data/ColorData";

// h1 (high font size)
export const Heading1 = ({ color, children }) => {
	return (
		<h1 style={{ color: `${colors[color]}` }}>
			{" "}
			{/* text color based on the user input */}
			{children} {/* user pass data and showing the color code(optional) */}
		</h1>
	);
};
// h2
export const Heading2 = ({ color, children }) => {
	return <h2 style={{ color: `${colors[color]}` }}>{children}</h2>;
};
// h3
export const Heading3 = ({ color, children }) => {
	return <h3 style={{ color: `${colors[color]}` }}>{children}</h3>;
};
// h4
export const Heading4 = ({ color, children }) => {
	return <h4 style={{ color: `${colors[color]}` }}>{children}</h4>;
};
// h5 (less font size)
export const Heading5 = ({ color, children }) => {
	return <h5 style={{ color: `${colors[color]}` }}>{children}</h5>;
};
//paragraph
export const Paragraph = ({ color, children, fontSize, textTransform, margin }) => {
	return (
		<p
			style={{
				color: `${colors[color]}`,
				fontSize: `${fontSize}`, // font size based on the user input
				textTransform: `${textTransform}`,// uppercase, lowercase , capitalize of the text based on the user input
				margin: `${margin}`
			}}
		>
			{children}
		</p>
	);
};
