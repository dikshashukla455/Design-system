import { React, useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";
export const Checkbox = (checkColor, variant) => {
	const [checked, setChecked] = useState(true);

	return (
		<>
			{variant === "disabled" ? (
				<div>
					<label className="checkbox" htmlFor="myCheckbox_one">
						<input
							type="checkbox"
							className="check_input"
							id="myCheckbox_one"
							name="myCheckbox"
							disabled
						/>
						<div className="checkmark"></div>
						default
					</label>
				</div>
			) : (
				<div>
					<label className="checkbox" htmlFor="myCheckbox_three">
						<input
							type="checkbox"
							className="check_input"
							id="myCheckbox_three"
							name="myCheckbox_disable"
							
						/>
						<div class="checkmark"></div>
						default
					</label>
				</div>
			)}
		</>
	);
};
