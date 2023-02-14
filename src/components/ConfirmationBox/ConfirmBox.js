import { React, useState } from "react";
import CloseImg from "../images/cross.svg";
import starImg from "../images/star.svg";
import DeleteImg from "../images/delete.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function ConfirmBox({ type, label, message }) {
	const [isOpen, setIsOpen] = useState(true); // setting the state for closing the banner initially it is opened
	if (!isOpen) {
		return null;
	}
	const onCloseHandler = () => {
		// adding the functionality for closing the banner by clicking
		setIsOpen(false);
	};
	// ========= icons of confirm and delete types
	const confirmType = type === "confirm" ? starImg : "";
	const deleteType = type === "delete" ? DeleteImg : "";
	return (
		<>
			{/* confirmation box */}
			<div className="confirm">
				<div
					className="confirm_box"
					style={{
						borderColor: ``, // adding the border color based on types of the alert
					}}
				>
					{/* container of the confirm box */}
					<div className="confirm_container">
						{/* content of the confirm box */}
						<div className="confirm_content">
							<img
								src={`${confirmType} ${deleteType}`} // adding the border color based on types of the alert
								alt=""
							/>
							{/* == user pass data == */}
							<div className="confirm_details">
								{/* label of the confirmation box */}
								<div className="confirm_heading">{label}</div>{" "}
							</div>
						</div>
						{/* message described in the confirmation box */}
						<div className="confirm_message">{message}</div>{" "}
					</div>
					{/* cross image will be added in the delete dialog box and closed the box by clicking on the cross image*/}
					<img
						src={type === "delete" ? CloseImg : ""}
						alt=""
						onClick={() => setIsOpen(false)}
					/>
				</div>
				<div className="confirm_button">
					{type === "confirm" && ( // variants of the buttons based on the confirm type
						<>
							<span onClick={() => setIsOpen(false)}>
								{" "}
								<Button textColor="s300" variant="transparent" fontSize="12px">
									Cancel
								</Button>
							</span>
							<Link to="/alert" style={{color: "white", textDecoration:"none"}}>
							<Button type="secondary" variant="default" fontSize="12px">
							CONFIRM
							</Button>
							</Link>
						</>
					)}
					{type === "delete" && ( // variants of the buttons based on the delete type
						<>
						<span onClick={() => setIsOpen(false)}>
							<Button variant="outlined" fontSize="12px">
								Cancel
							</Button>
							</span>
							<span style={{ marginLeft: "24px" }}></span>
							<Button type="danger" variant="default" fontSize="12px">
								Delete
							</Button>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default ConfirmBox;
