import { colors } from "../Data/ColorData";

// fetching the category of the color by their colorcodes
// !! showing error
export function getThemeColor(color) {
	const themeColor = {
		p: "primary",
		s: "secondary",
		t: "tertiary",
		a: "accent",
		su: "success",
		w: "warning",
		d: "danger",
		g: "grey",
		b: "black",
	};
	switch (color.charAt()) {
		case "p":
			return themeColor.p;
			break;
		case "s":
			return themeColor.s;
			break;
		case "t":
			return themeColor.t;
			break;
		case "a":
			return themeColor.a;
			break;
		case "su":
			return themeColor.su;
			break;
		case "w":
			return themeColor.w;
			break;
		case "d":
			return themeColor.d;
			break;
		case "g":
			return themeColor.g;
			break;
		case "b":
			return themeColor.b;
			break;
	}
}

// fetching the type of the button background color by their colorcodes
export function ButtonType(type) {
	switch (type) {
		case "primary":
			return colors.primary.p300;
			break;
		case "secondary":
			return colors.secondary.s300;
			break;
		case "tertiary":
			return colors.tertiary.t300;
			break;
		case "accent":
			return colors.accent.a300;
			break;
		case "success":
			return colors.success.s300;
			break;
		case "warning":
			return colors.warning.w300;
			break;
		case "danger":
			return colors.danger.d300;
			break;
		case "grey":
			return colors.grey.g300;
			break;
		case "black":
			return colors.black.b300;
			break;
	}
}
// fetching the dark color for the text color and border color of the outlined variant tag, background color of the solid variant tags
export function DarkTagColor(type) {
	switch (type) {
		case "primary":
			return colors.primary.p500;
			break;
		case "secondary":
			return colors.secondary.s400;
			break;
		case "tertiary":
			return colors.tertiary.t400;
			break;
		case "accent":
			return colors.accent.a400;
			break;
		case "success":
			return colors.success.s400;
			break;
		case "warning":
			return colors.warning.w400;
			break;
		case "danger":
			return colors.danger.d400;
			break;
		case "grey":
			return colors.grey.g400;
			break;
	}
}
// fetching the light color for the background color of the outlined varaint tags
export function LightTagColor(type) {
	switch (type) {
		case "primary":
			return colors.primary.p75;
			break;
		case "secondary":
			return colors.secondary.s75;
			break;
		case "tertiary":
			return colors.tertiary.t75;
			break;
		case "accent":
			return colors.accent.a75;
			break;
		case "success":
			return colors.success.s75;
			break;
		case "warning":
			return colors.warning.w75;
			break;
		case "danger":
			return colors.danger.d75;
			break;
		case "grey":
			return colors.grey.g75;
			break;
	}
}
