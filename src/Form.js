import { Component, React, useState, useEffect } from "react";
import { Heading2, Paragraph } from "./components/typography/Typography";
import Button from "./components/Buttons/Button";
import { TextField } from "./components/TextField/TextField";
import { Checkbox, Radio } from "./components/TextField/ButtonComponent";
import "./Form.css";
import ConfirmBox from "./components/ConfirmationBox/ConfirmBox";

function Form() {
	// adding the functionality to handle the errors
	const [state, setState] = useState({
		fullName: "",
		mobile: "",
		DOB: "",
		email: "",
	});
	const [error, setError] = useState(false);
	const [modal, setModal] = useState(false);
	const onErrorHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	const onSubmitHandler = (e) => {
		if (
			state.fullName.length === 0 ||
			state.fullName.includes(" ") ||
			state.mobile.length === 0 ||
			state.mobile.length !== 10 ||
			state.DOB.length === 0 ||
			state.email.length === 0
		) {
			setError(true);
		} else {
			setError(false);
		}
		console.log(state);
		e.preventDefault();
	};
	useEffect(() => {
		setModal(!modal);
		console.log("modal");
	}, [error]);
	return (
		<div className="container">
			<div className="form-container">
				{/* form */}
				<form action="" onSubmit={onSubmitHandler}>
					{/* heading */}
					<Heading2 color="b300">Kindly Enter Your Details</Heading2>
					<div style={{ display: "flex", alignItems: "start" }}>
						{/* Name field */}
						<TextField
							inputType="text"
							placeholderText="Enter full name"
							label="Full name*"
							variant={
								error &&
								(state.fullName.length === 0 || !state.fullName.includes(" "))
									? "error"
									: ""
							}
							error={
								error &&
								(state.fullName.length === 0 || !state.fullName.includes(" "))
									? "please enter valid full name"
									: ""
							}
							onChange={onErrorHandler}
							name="fullName"
							id="Name"
						/>
						{/* Gender field */}
						<div className="gender">
							<Paragraph fontSize="16px" color="b300" margin="0">
								Gender*
							</Paragraph>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									margin: "8px",
									fontWeight: "400",
								}}
							>
								<Radio name="gender" label="male" /> &nbsp;&nbsp;&nbsp;&nbsp;
								<Radio name="gender" label="female" />
							</div>
						</div>
					</div>
					{/* Mobile number field */}
					<TextField
						inputType="number"
						placeholderText="Enter 10 digit mobile number"
						label="Mobile number*"
						variant={
							error && (state.mobile.length === 0 || state.mobile.length !== 10)
								? "error"
								: ""
						}
						error={
							error && (state.mobile.length === 0 || state.mobile.length !== 10)
								? "please enter valid mobile number"
								: ""
						}
						onChange={onErrorHandler}
						name="mobile"
						id="mobile"
					/>
					{/* Date of Birth field */}
					<TextField
						inputType="date"
						placeholderText="DD/MM/YYYY"
						label="Date of Birth*"
						variant={error && state.DOB.length <= 0 ? "error" : ""}
						error={
							error && state.DOB.length <= 0
								? " please enter valid Date of Birth"
								: ""
						}
						onChange={onErrorHandler}
						id="DOB"
						name="DOB"
					/>
					{/* email Address field */}
					<TextField
						inputType="email"
						placeholderText="Enter email address"
						label="Email Address*"
						focusColor="s300"
						variant={error && state.email.length <= 0 ? "error" : ""}
						error={
							error && state.email.length <= 0
								? "please enter valid email address"
								: ""
						}
						onChange={onErrorHandler}
						id="address"
						name="email"
					/>
					{/* Annual income field */}
					<div className="annual">
						<Paragraph fontSize="16px" color="b300" margin="0">
							Annual Income[In Lakhs]*
						</Paragraph>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								margin: "8px",
								fontWeight: "400",
							}}
						>
							<Radio
								width="18px"
								height="18px"
								label="< 3 lakhs"
								className="radio_label"
								name="annual"
							/>{" "}
							<Radio
								width="18px"
								height="18px"
								label="3-5 lakhs"
								className="radio_label"
								name="annual"
							/>{" "}
							<Radio
								width="18px"
								height="18px"
								label="5-7 lakhs"
								className="radio_label"
								name="annual"
							/>{" "}
							<Radio
								width="18px"
								height="18px"
								label="7-10 lakhs"
								className="radio_label"
								name="annual"
							/>{" "}
							<Radio
								width="18px"
								height="18px"
								label="10+ lakhs"
								className="radio_label"
								name="annual"
							/>{" "}
						</div>
					</div>
					{/* Checkbox conditions */}
					<div
						className=""
						style={{ display: "flex", textAlign: "left", marginTop: "20px" }}
					>
						<Checkbox
							checkColor="primary"
							width="18px"
							height="18px"
							id="checkbox_one"
						/>
						<Paragraph color="g300" fontSize="14px" margin="0">
							By sharing above details, I agree to KLI and its representatives
							contacting me through call, SMS, email or WhatsApp even if I am
							registered under NDNC. I also agree that I have read and
							understood the Privacy policy and agree to abide by the same
						</Paragraph>
					</div>
					<div
						className=""
						style={{
							display: "flex",
							textAlign: "left",
							margin: "8px 0 15px 0",
						}}
					>
						<Checkbox
							checkColor="primary"
							width="18px"
							height="18px"
							id="checkbox_two"
						/>
						<Paragraph color="g300" fontSize="14px" margin="0">
							To undergo suitability analysis, please Click here. If you wish to
							bypass the suitability analysis please click on the checkbox. By
							selecting the checkbox, you declare to consciously bypass the
							recommended suitability module and purchase the policy based on
							your independent assessment.
						</Paragraph>
					</div>

					{/* submit button */}
					<div style={{ textAlign: "center" }}>
						<Button
							type="danger"
							rounded={true}
							textColor=""
							onClick={onSubmitHandler}
						>
							PROCEED
						</Button>
						{modal && (
							<div className="overlay">
								<ConfirmBox
									type="confirm"
									label="Are you sure you want to proceed?"
									message="The changes will not be accepted after submission"
									
								/>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export default Form;
