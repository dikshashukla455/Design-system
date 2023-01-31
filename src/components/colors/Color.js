
import {useState} from 'react';
import { colors } from "../Data/ColorData";
function Color() {
	const [searColor, setsearColor]=useState('');
	const oncolorhandler = (e) =>{
		setsearColor(e.target.value);
	}
	console.log(searColor);
	
	return(
		<>
		<input type="text" onChange={oncolorhandler} />
	<h3 style={{color: `${colors.success.s200}`}}>Hello World</h3>
	{searColor}
	</>
	);
}

export default Color;
