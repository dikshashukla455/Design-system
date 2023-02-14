import { React, useState } from "react";
import { colors } from "../Data/ColorData";


// INPUTFIELD
export const TextField = ({
	inputType,
	placeholderText,
	label,
	focusColor,
	description,
	variant,
	width,
	error,
	onChange,
	name,
	id
}) => {
	const ErrorContext = variant==="error";
	// changing the input border (error)
	const setError =
		ErrorContext && variant !== "disabled" ? "#E84A4A" : "#C3C6C9";
	return (
		<div>
			<form action="">
				{/* form label */}
				<label htmlFor={id} className="input_label">
					{label}
				</label>
				{/* form description */}
				<p className="input_description">{description}</p>
				{/* input field with default and disable variant */}
				<input
					type={inputType}
					placeholder={placeholderText}
					name={name}
					id={id}
					style={{
						padding: "8px 10px",
						borderColor: `${setError}`,
						borderRadius: "4px",
						background: `${variant === "disabled" ? "#F5F5F6" : "#ffffff"}`, // setting the background color based on the variant prop (disable)
						outlineColor: `${colors[focusColor]}`, 
						width:`${width}`
					}}
					onChange={onChange}
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the variant prop
					
				/>
				{/* setting the error message */}
				{ErrorContext && variant !== "disabled" && (
					<p className="input_error">{error}</p>
				)}
			</form>
			<br />
		</div>
	);
};

// TEXTAREA

export const TextArea = ({
	placeholderText,
	label,
	description,
	variant,
	textareaFocusColor,
	cols,
	rows,
	width
}) => {
	// adding the functionality to handle the errors
	const [Error, SetError] = useState("");
	const onErrorHandler = (e) => {
		SetError(e.target.value);
	};
	// changing the input border (error)
	const setError =
		Error.length === 0 && variant !== "disabled" ? "#E84A4A" : "#C3C6C9";

	return (
		<>
			<form action="">
				{/* form label */}
				<label htmlFor="" className="input_label">
					{label}
				</label>
				{/* form description */}
				<p className="input_description">{description}</p>

				{/* textarea with default and disable variant */}
				<textarea
					cols={cols}
					rows={rows}
					placeholder={placeholderText}
					style={{
						padding: "8px 10px",
						borderRadius: "4px",
						borderColor: `${setError}`,
						background: `${variant === "disabled" ? "#F5F5F6" : "#ffffff"}`, // setting the background color based on the variant prop (disable)
						outlineColor: `${
							colors[textareaFocusColor] // setting the outline color based on the prop
						}`,
						width:`${width}`
					}}
					onChange={onErrorHandler}
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the variant prop
					
				></textarea>
				{/* setting the error message */}
				{Error.length === 0 && variant !== "disabled" && (
					<p className="input_error">Error Message</p>
				)}
			</form>
		</>
	);
};
