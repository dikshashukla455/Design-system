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
	const [Error, SetError] = useState("");
	const onErrorHandler = (e) => {
		SetError(e.target.value);
	};
// const ErrorOutline = Error === "0" ? "red" : colors[getThemeColor(focusColor)][focusColor];
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
					<select
						name="Select item"
						id=""
						placeholder="Select item"
						style={{
							padding: "8px 10px",
							width: "200px",
							borderColor: "#C3C6C9",
							backgroundColor: "#F5F5F6",
							borderRadius: "4px",
						}}
						disabled
					>
						<option
							value=""
							disabled
							selected
							style={{ display: "none" }}
							className="selectColor"
						>
							{placeholder}
						</option>
					</select>
				) : (
					<>
						<select
							name="Select item"
							id=""
							placeholder="Select item"
							style={{
								padding: "8px 10px",
								width: "200px",
								borderColor: "#C3C6C9",
								outlineColor: `${
									colors[getThemeColor(focusColor)][focusColor]
								}`,
								borderRadius: "4px",
							}}
							onChange={onErrorHandler}
						>
							<option value="0" selected>
								{placeholder}
							</option>
							<option value="1">{Option1}</option>
							<option value="2">{Option2}</option>
							<option value="3">{Option3}</option>
							<option value="4">{Option4}</option>
						</select>
						{Error === "0" && (
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
}

export default Dropdown;
