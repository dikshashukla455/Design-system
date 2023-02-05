import { React, useState } from "react";
import { colors } from "../Data/ColorData";
import { getThemeColor } from "../colors/UtilityFunction";
export const Checkbox = (checkColor, variant) => {
	const [checked, setChecked] = useState(true);

	return (
		<>
			{variant === "disabled" ? (
				<div>
					<label class="checkbox" for="myCheckbox_one">
						<input
							type="checkbox"
							class="check_input"
							id="myCheckbox_one"
							name="myCheckbox"
							disabled
						/>
						<div class="checkmark"></div>
						default
					</label>
					&nbsp;&nbsp;
					<label class="checkbox" for="myCheckbox_two">
						<input
							type="checkbox"
							class="check_input"
							id="myCheckbox_two"
							name="myCheckbox"
							onChange={() => setChecked(!checked)}
							checked={checked}
							disabled
						/>
						<div
							class="checkmark"
							style={{ backgroundColor: "#c3c6c9" }}
							//style={{backgroundColor: `${colors[getThemeColor(checkColor)][checkColor]}` }}
						></div>
						checked
					</label>
				</div>
			) : (
				<div>
					<label class="checkbox" for="myCheckbox_three">
						<input
							type="checkbox"
							class="check_input"
							id="myCheckbox_three"
							name="myCheckbox"
							
						/>
						<div class="checkmark"></div>
						default
					</label>
					&nbsp;&nbsp;
					<label class="checkbox" for="myCheckbox_four">
						<input
							type="checkbox"
							class="check_input"
							id="myCheckbox_four"
							name="myCheckbox"
							onChange={() => setChecked(!checked)}
							checked={checked}
						
						/>
						<div
							class="checkmark"
							style={{ backgroundColor: `${checked && "blue"}` }}
							//style={{backgroundColor: `${colors[getThemeColor(checkColor)][checkColor]}` }}
						></div>
						checked
					</label>
				</div>
			)}
		</>
	);
};
