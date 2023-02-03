import { React, useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";

// INPUTFIELD
export const TextField = ({
	inputType,
	placeholderText,
	label,
	focusColor,
	description,
	variant,
}) => {
	const [Error, SetError] = useState("");
	const onErrorHandler = (e) => {
		SetError(e.target.value);
	};
	const setError = Error.length === 0 ? "#E84A4A" : "#C3C6C9";
	return (
		<div>
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
					<input
						type={inputType}
						placeholder={placeholderText}
						style={{
							padding: "8px 10px",
							borderColor: `#C3C6C9`,
							background: "#F5F5F6",
							borderRadius: "4px",
						}}
						disabled
					/>
				) : (
					<>
						<input
							type={inputType}
							placeholder={placeholderText}
							style={{
								padding: "8px 10px",
								borderColor: `${setError}`,
								borderRadius: "4px",
								outlineColor: `${
									colors[getThemeColor(focusColor)][focusColor]
								}`,
							}}
							onChange={onErrorHandler}
						/>
						{Error.length === 0 && (
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
					</>
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
}) => {
	const [Error, SetError] = useState("");
	const onErrorHandler = (e) => {
		SetError(e.target.value);
	};
	const setError = Error.length === 0 ? "#E84A4A" : "#C3C6C9";

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
					<textarea
						cols="35"
						rows="9"
						placeholder={placeholderText}
						style={{
							padding: "8px 10px",
							borderRadius: "4px",
							borderColor: `#C3C6C9`,
							background: "#F5F5F6",
						}}
						disabled
					></textarea>
				) : (
					<>
						<textarea
							cols="35"
							rows="9"
							placeholder={placeholderText}
							style={{
								padding: "8px 10px",
								borderRadius: "4px",
								borderColor: `${setError}`,
								outlineColor: `${
									colors[getThemeColor(textareaFocusColor)][textareaFocusColor]
								}`,
							}}
							onChange={onErrorHandler}
						></textarea>
						{Error.length === 0 && (
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
					</>
				)}
			</form>
		</>
	);
};
