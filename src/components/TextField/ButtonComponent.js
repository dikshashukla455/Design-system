import { React, useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor, DarkTagColor } from "../colors/UtilityFunction";
// ===================== CHECKBOX COMPONENT ==========================
export const Checkbox = ({ checkColor, variant, label }) => {
	const [checked, setChecked] = useState(false); // setting the state for the checkbox initially not checked

	return (
		<>
			<label
				className="checkbox"
				htmlFor={variant === "disabled" ? "myCheckBoxDisable" : "myCheckbox"}
			>
				<input
					type="checkbox"
					className="check_input"
					id={variant === "disabled" ? "myCheckBoxDisable" : "myCheckbox"}
					name="myCheckBox"
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
					}}
				></div>
				{/* user pass data */}
				{label}
			</label>
		</>
	);
};
// ===================== RADIO COMPONENT ==========================
export const Radio = ({ checkColor, variant, label }) => {
	const [checked, setChecked] = useState(false); // setting the state for the checkbox initially not checked

	return (
		<>
			<label
				className="radio"
				htmlFor={variant === "disabled" ? "myRadioDisable" : "myRadio"}
			>
				<input
					type="radio"
					className="radio_input"
					id={variant === "disabled" ? "myRadioDisable" : "myRadio"}
					name="myRadio"
					onChange={() => setChecked(!checked)} // on and off checkbox functionality
					disabled={variant === "disabled" ? true : false} // setting the disabled state based on the disable variant
				/>
				{/* creating a custom radio button */}
				<div
					className="circle"
					style={{
						backgroundColor: `${variant === "disabled" ? "#f5f5f6" : ""}`,
					}} // changing the background color of the radio based on the  disabled variant
				></div>
				{/*user pass data */}
				{label}
			</label>
		</>
	);
};
// ===================== TOGGLE COMPONENT ==========================
export const Toggle = ({ checkColor, variant, label }) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<label
				className="toggle"
				htmlFor={variant === "disabled" ? "myToggleDisable" : "myToggle"}
			>
				<input
					className="toggle__input"
					name="toggle"
					type="checkbox"
					id={variant === "disabled" ? "myToggleDisable" : "myToggle"}
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
					}}
				></div>
				{/*user pass data */}
				{label}
			</label>
		</>
	);
};
