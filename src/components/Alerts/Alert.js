import { React, useState } from "react";
import CloseImg from "../images/cross.svg";
import infoImg from "../images/info.svg";
import errorImg from "../images/error.svg";
import successImg from "../images/success.svg";
import warningImg from "../images/warning.svg";

function Alert({ type, message }) {
	// ========= icons of different alert types
	const infoType = type === "information" ? infoImg : ""; // "information"
	const errorType = type === "error" ? errorImg : ""; // "error"
	const successType = type === "success" ? successImg : ""; // "success"
	const warningType = type === "warning" ? warningImg : ""; // "warning"

	// ========= colors of different alert types(border color)
	const infoColor = type === "information" ? "#166CEC" : ""; // "information"
	const errorColor = type === "error" ? "#E84A4A" : ""; // "error"
	const successColor = type === "success" ? "#4ECA78" : ""; // "success"
	const warningColor = type === "warning" ? "#F9B247" : ""; // "warning"

	const [isOpen, setIsOpen] = useState(true); // setting the state for closing the banner initially it is opened
	if (!isOpen) {
		return null;
	}
	const onCloseHandler = () => {
		// adding the functionality for closing the banner by clicking
		setIsOpen(false);
	};
	return (
		<>
			<div
				className="alert_box" // alert parent box
				style={{
					borderColor: `${infoColor} ${successColor} ${warningColor} ${errorColor}`, // adding the border color based on types of the alert
				}}
			>
				<div className="alert_content">
					<img
						src={`${infoType} ${errorType} ${successType} ${warningType}`} // adding the border color based on types of the alert
						alt=""
					/>
					{/* == user pass data == */}
					<div className="alert_details">
						{/* type of the alert box */}
						<div className="alert_heading">{type}</div>{" "}
						{/* message described in the alert box */}
						<div className="alert_message">{message}</div>{" "}
					</div>
				</div>
				{/* cross image will be added based on the crossed variant and closed the banner by clicking on the cross image*/}
				<img src={CloseImg} alt="" onClick={() => setIsOpen(false)} />
			</div>
		</>
	);
}

export default Alert;
