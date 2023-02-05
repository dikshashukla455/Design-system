import React from "react";
import {
	ButtonType,
	DarkTagColor,
	LightTagColor,
} from "../colors/UtilityFunction";

function Tag({ fontSize, variant, variantShape, tagColor, tagName }) {
	return (
		<>
			{variant === "solid" && variantShape === "rounded" && (
				<div
					style={{
						border: `none`,
						borderRadius: "100px",
						backgroundColor: `${DarkTagColor(tagColor)}`,
						color: `#ffffff`,
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "solid" && variantShape === "rectangle" && (
				<div
					style={{
						border: "none",
						borderRadius: "2px",
						backgroundColor: `${DarkTagColor(tagColor)}`,
						color: `#ffffff`,
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rounded" && (
				<div
					style={{
						border: `1px solid ${DarkTagColor(tagColor)}`,
						borderRadius: "100px",
						color: `${DarkTagColor(tagColor)}`,
						backgroundColor: `${LightTagColor(tagColor)}`,
						fontSize:`${fontSize}`
					}}
					className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rectangle" && (
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
