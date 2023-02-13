import { React, useState } from "react";
import { DarkTagColor } from "../colors/UtilityFunction";
// ===================== CHECKBOX COMPONENT ==========================
export const Checkbox = ({
	checkColor,
	variant,
	label,
	width,
	height,
	id,
	name,
	className
}) => {
	const [checked, setChecked] = useState(false); // setting the state for the checkbox initially not checked

	return (
		<>
			<label className={`checkbox ${className}`} htmlFor={id}>
				<input
					type="checkbox"
					className="check_input"
					id={id}
					name={name}
					onChange={() => setChecked(!checked)} // on and off checkbox functionality
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the disable variant
				/>
				{/* creating a custom checkbox */}
				<div
					className="checkmark"
					style={{
						backgroundColor: `${
							checked ? DarkTagColor(checkColor) : "" // changing the background color of the checkbox based on the variant
						} ${variant === "disabled" ? "#f5f5f6" : ""}`, // change the background color for the disabled variant
						width: `${width}`,
						height: `${height}`,
					}}
				></div>
				{/* user pass data */}
				{label}
			</label>
		</>
	);
};
// ===================== RADIO COMPONENT ==========================
export const Radio = ({
	checkColor,
	variant,
	label,
	width,
	height,
	id,
	name,
	className
}) => {
	const [checked, setChecked] = useState(false); // setting the state for the checkbox initially not checked

	return (
		<>
			<label className={`radio ${className}`} htmlFor={id} style={{display:"flex", alignItems:"center"}}>
				<input
					type="radio"
					className="radio_input"
					id={id}
					name={name}
					onChange={() => setChecked(!checked)} // on and off checkbox functionality
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the disable variant
				/>
				{/* creating a custom radio button */}
				<div
					className="circle"
					style={{
						backgroundColor: `${variant === "disabled" ? "#f5f5f6" : ""}`, // changing the background color of the radio based on the  disabled variant
						width: `${width}`,
						height: `${height}`,
					}}
				></div>
				{/*user pass data */}
				{label}
			</label>
		</>
	);
};
// ===================== TOGGLE COMPONENT ==========================
export const Toggle = ({
	checkColor,
	variant,
	label,
	width,
	height,
	id,
	name,
	className
}) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<label className={`toggle ${className}`} htmlFor={id}>
				<input
					className="toggle__input"
					name={name}
					type="checkbox"
					id={id}
					onChange={() => setChecked(!checked)} // on and off checkbox functionality
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the disable variant
				/>
				{/* creating a custom toggle button */}
				<div
					className={`toggle__fill`}
					style={{
						backgroundColor: `${
							checked ? DarkTagColor(checkColor) : "" // changing the background color of the toggle based on the variant
						} ${variant === "disabled" ? "#c3c6c9" : ""}`, // change the background color for the disabled variant
						width: `${width}`,
						height: `${height}`,
					}}
				></div>
				{/*user pass data */}
				<span>{label}</span>
			</label>
		</>
	);
};
