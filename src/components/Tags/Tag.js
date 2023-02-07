import React from "react";
import {
	ButtonType,
	DarkTagColor,
	LightTagColor,
} from "../colors/UtilityFunction";

function Tag({ fontSize, variant, variantShape, tagColor, tagName }) {
	return (
		<>
			{variant === "solid" && variantShape === "rounded" && (   // for the solid tag with the rounded corners 
				<div
					style={{
						border: `none`,
						borderRadius: "100px",
						backgroundColor: `${DarkTagColor(tagColor)}`, // user passed color of the tag throung the tagColor prop
						color: `#ffffff`,
						fontSize:`${fontSize}` // user pass font size through the prop
					}}
					className="tagBlock"
				>
				{/* user pass data */}
					{tagName}
				</div>
			)}
			{variant === "solid" && variantShape === "rectangle" && ( // for the solid tag with the bit cornered (rectangle shape)
				<div
					style={{
						border: "none",
						borderRadius: "2px",
						backgroundColor: `${DarkTagColor(tagColor)}`, // dark background color in solid variant (each category)
						color: `#ffffff`,
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rounded" && ( // for the outlined tag variant with the roundered corners
				<div
					style={{
						border: `1px solid ${DarkTagColor(tagColor)}`, // dark border color in outlined variant (each category)
						borderRadius: "100px",
						color: `${DarkTagColor(tagColor)}`, // dark text color in outlined variant (each category)
						backgroundColor: `${LightTagColor(tagColor)}`, // light background color in outlined variant (each category)
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rectangle" && ( // for the outlined tag variant with the bit cornered (rectangle shape)
				<div
					style={{
						border: `1px solid ${DarkTagColor(tagColor)}`,
						borderRadius: "4px",
						color: `${DarkTagColor(tagColor)}`,
						backgroundColor: `${LightTagColor(tagColor)}`,
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
		</>
	);
}

export default Tag;
