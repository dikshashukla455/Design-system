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
        b: "black"
	};
	if (color.slice(0, 1) === "p") { // primary
		return themeColor.p;
	}
	if (color.slice(0, 1) === "s") { // secondary
		return themeColor.s;
	}
	if (color.slice(0, 1) === "t") { // tertiary
		return themeColor.t;
	}
    if (color.slice(0, 1) === "a") { // accent
		return themeColor.a;
	}
	if (color.slice(0, 1) === "su") { // success
		return themeColor.su;
	}
	if (color.slice(0, 1) === "w") { // warning
		return themeColor.w;
	}
    if (color.slice(0, 1) === "d") { // danger
		return themeColor.d;
	}
	if (color.slice(0, 1) === "g") { // grey
		return themeColor.g;
	}
	if (color.slice(0, 1) === "b") { // black
		return themeColor.b;
	}
}