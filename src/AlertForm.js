import React from "react";
import Alert from "./components/Alerts/Alert";
import "./Form.css";
function AlertForm() {
	return (
		<div className="overlay">
			<Alert
				type="success"
				message="The form has been submitted successfully"
			/>
		</div>
	);
}

export default AlertForm;
