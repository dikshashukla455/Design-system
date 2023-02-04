import React from "react";

function Tag({ fontSize, variant, variantShape, tagColor, tagName }) {
	return (
		<>
			{variant === "solid" && variantShape === "rounded" && (
				<div
					style={{
						border: "1px solid red",
						borderRadius: "100px",
						backgroundColor: "pink",

					}}
          className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "solid" && variantShape === "rectangle" && (
				<div
					style={{
						border: "1px solid blue",
						backgroundColor: "green",

					}}
          className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rounded" && (
				<div
					style={{
						border: "1px solid red",
						borderRadius: "100px",
						color: "pink",

					}}
          className="tagBlock"
				>
					{tagName}
				</div>
			)}
			{variant === "outlined" && variantShape === "rectangle" && (
				<div
					style={{
						border: "1px solid blue",
						color: "green",

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
