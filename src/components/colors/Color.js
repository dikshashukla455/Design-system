import { useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "./UtilityFunction";
function Color() {
	const [searColor, setsearColor] = useState("p100");
	const oncolorhandler = (e) => {
		setsearColor(e.target.value);
	};
	console.log(searColor);
	const ColorProperty = getThemeColor(searColor);
	return (
		<>
			<input type="text" onChange={oncolorhandler} />
			<h3 style={{ color: `${colors[ColorProperty][searColor]}` }}>
				Hello World
			</h3>
			{searColor}
		</>
	);
}

export default Color;
