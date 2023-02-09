import { colors } from "../Data/ColorData";

// fetching the type of the button background color by their colorcodes
export function ButtonType(type) {
	switch (type) {
		case "primary":
			return colors.p300;
			break;
		case "secondary":
			return colors.s300;
			break;
		case "tertiary":
			return colors.t300;
			break;
		case "accent":
			return colors.a300;
			break;
		case "success":
			return colors.su300;
			break;
		case "warning":
			return colors.w300;
			break;
		case "danger":
			return colors.d300;
			break;
		case "grey":
			return colors.g300;
			break;
		case "black":
			return colors.b300;
			break;
	}
}
// fetching the dark color for the text color and border color of the outlined variant tag, background color of the solid variant tags
export function DarkTagColor(type) {
	switch (type) {
		case "primary":
			return colors.p500;
			break;
		case "secondary":
			return colors.s400;
			break;
		case "tertiary":
			return colors.t400;
			break;
		case "accent":
			return colors.a400;
			break;
		case "success":
			return colors.su400;
			break;
		case "warning":
			return colors.w400;
			break;
		case "danger":
			return colors.d400;
			break;
		case "grey":
			return colors.g400;
			break;
	}
}
// fetching the light color for the background color of the outlined varaint tags
export function LightTagColor(type) {
	switch (type) {
		case "primary":
			return colors.p75;
			break;
		case "secondary":
			return colors.s75;
			break;
		case "tertiary":
			return colors.t75;
			break;
		case "accent":
			return colors.a75;
			break;
		case "success":
			return colors.su75;
			break;
		case "warning":
			return colors.w75;
			break;
		case "danger":
			return colors.d75;
			break;
		case "grey":
			return colors.g75;
			break;
	}
}
