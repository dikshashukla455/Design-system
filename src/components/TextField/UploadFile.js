import React from "react";
import UploadImg from "../images/upload.svg";
import DisabledImg from "../images/upload (1).svg";

function UploadFile({ label, description, variant, acceptFiles, focusColor }) {
	return (
		<>
			<form action="">
				{/* form label */}
				<label htmlFor="" className="input_label">
					{label}
				</label>
				{/* form description */}
				<p className="input_description">{description}</p>

				{/* dropdown with default and disable variant */}
				{/* file upload input */}
				<input
					type="file"
					id="contained-button-file"
					accept={acceptFiles} // used to upload specific files
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the variant prop
				/>
				{/* making the a custom file upload input */}
				<label
					htmlFor="contained-button-file"
					className="custom_file_upload"
					style={{
						backgroundColor: `${
							variant === "disabled" ? "#F5F5F6" : "#ffffff" //  backgound color based on the variant prop (disable)
						}`,
						color: `${variant === "disabled" ? "#989CA2" : "#000000"}`,
						//outlineColor: `${colors[getThemeColor(focusColor)][focusColor]}`, // !! ERROR: page not shown
						borderColor: `${variant === "error" ? "#E84A4A" : "#C3C6C9"}`,
					}}
				>
					{variant === "disabled" ? (
						<img src={DisabledImg} /> // upload image for the disabled variant
					) : (
						<img src={UploadImg} /> // upload image for the default
					)}{" "}
					<br /> Drag and drop file here <br /> or <br /> Click to browse files
				</label>
				{/* setting the error message */}
				{variant === "error" && variant !== "disabled" && (
					<p className="input_error">Error Message</p>
				)}
			</form>
		</>
	);
}

export default UploadFile;
