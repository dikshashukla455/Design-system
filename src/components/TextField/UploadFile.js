import React from "react";
import UploadImg from "../images/upload.svg";
import DisabledImg from "../images/upload (1).svg";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";

function UploadFile({ label, description, variant, acceptFiles, focusColor }) {
	const backgroundVariant = variant === "disabled" ? "#F5F5F6" : "#ffffff";
	const colorVariant = variant === "disabled" ? "#989CA2" : "#000000";
	const errorVariant = variant === "error" ? "#E84A4A" : "#C3C6C9";

	return (
		<>
			<form action="">
				<label
					style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}
					htmlFor=""
				>
					{label}
				</label>
				<p
					style={{
						fontSize: "16px",
						fontWeight: "500",
						lineHeight: "24px",
						color: "#6A6D71",
					}}
				>
					{description}
				</p>
				{variant === "disabled" ? (
					<input type="file" accept="" id="contained-button-file" disabled />
				) : (
					<input type="file" id="contained-button-file" accept={acceptFiles} />
				)}
				<label
					htmlFor="contained-button-file"
					className="custom_file_upload"
					style={{
						backgroundColor: `${backgroundVariant}`,
						color: `${colorVariant}`,
						//outlineColor: `${colors[colorCode][focusColor]}`,
						borderColor:`${errorVariant}`
					}}
				>
					{variant === "disabled" ? (
						<img src={DisabledImg} />
					) : (
						<img src={UploadImg} />
					)}{" "}
					<br /> Drag and drop file here <br /> or <br /> Click to browse files
				</label>

				{variant === "error" && (
					<p
						style={{
							color: "#E84A4A",
							fontSize: "16px",
							fontWeight: "500",
							lineHeight: "24px",
						}}
						className="error"
					>
						Error Message
					</p>
				)}
			</form>
		</>
	);
}

export default UploadFile;
