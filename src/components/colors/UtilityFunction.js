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
	switch (color.slice(0, 1)) {
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
