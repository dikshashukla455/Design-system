import { React, useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";

function Dropdown({
	label,
	description,
	focusColor,
	variant,
	placeholder,
	Option1,
	Option2,
	Option3,
	Option4,
}) {
	// adding the functionality to handle the errors
	const [Error, SetError] = useState("");
	const onErrorHandler = (e) => {
		SetError(e.target.value);
	};
	// const ErrorOutline = Error === "0" ? "red" : colors[getThemeColor(focusColor)][focusColor];
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
				<select
					name="Select item"
					id=""
					placeholder="Select item"
					style={{
						padding: "8px 10px",
						width: "200px",
						borderColor: "#C3C6C9",
						// outlineColor: `${colors[getThemeColor(focusColor)][focusColor]}`,
						background: `${variant === "disabled" ? "#F5F5F6" : "#ffffff"}`, // setting the background color based on the variant prop (disable)
						borderRadius: "4px",
					}}
					onChange={onErrorHandler}
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the variant prop
				>
					{/* list of the options*/}
					<option
						value="0"
						selected
						disabled={variant === "disabled" ? true : false}
					>
						{placeholder}
					</option>
					<option value="1">{Option1}</option>
					<option value="2">{Option2}</option>
					<option value="3">{Option3}</option>
					<option value="4">{Option4}</option>
				</select>
				{/* setting the error message */}
				{Error.length === 0 && variant !== "disabled" && (
					<p className="input_error">Error Message</p>
				)}
			</form>
		</>
	);
}

export default Dropdown;
