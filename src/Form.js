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
		hooks: true,
	});
	const [error, setError] = useState(false); // setting the error functionality
	const [modal, setModal] = useState(false); // for the popup modal
	const [firstRenderModal, SetFirstRenderModal] = useState(true); // setting the state for the first render of the popup modal
	const [checkedOne, setCheckedOne] = useState(false); // setting the state for the checkbox condition one
	const [checkedTwo, setCheckedTwo] = useState(false); // setting the state for the checkbox condition two
	const [radioGender, setRadioGender] = useState(false); // setting the state for the gender radio
	const [radioAnnual, setRadioAnnual] = useState(false); // setting the state for the annual income radio buttons
	const onErrorHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({
			...state,
			[name]: value,
		});
	};
	console.log(radioGender);
	const onSubmitHandler = (e) => {
		// conditions happen on clicking the proceed button
		if (
			state.fullName.length === 0 || // full name field should not be empty
			!state.fullName.includes(" ") || // full name field should have spaces
			state.mobile.length === 0 || // mobile number field should not be empty
			state.mobile.length !== 10 || // mobile number field should have 10 digit number
			state.DOB.length === 0 || // DOB field should not be empty
			state.email.length === 0 || // email field should not be empty
			!checkedOne ||
			!checkedTwo || // checkbox and radio should be selected
			!radioGender ||
			!radioAnnual
		) {
			SetFirstRenderModal(false);
			setError(true);
		} else {
			SetFirstRenderModal(false);
			setError(false);
		}

		console.log(state);
		e.preventDefault();
	};
	useEffect(() => {
		if (!firstRenderModal) {
			error ? setModal(false) : setModal(true);
		}
	}, [error, firstRenderModal]);
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
								onChange={() => {
									setRadioGender(!radioGender);
									return;
								}}
							>
								<Radio name="gender" label="male" /> &nbsp;&nbsp;&nbsp;&nbsp;
								<Radio name="gender" label="female" />
							</div>
							{error && !radioGender ? (
								<p className="checkbox_error">
									please select one of the above options
								</p>
							) : (
								""
							)}
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
							onChange={() => setRadioAnnual(!radioAnnual)}
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
						{error && !radioAnnual ? (
							<p className="checkbox_error">
								please select one of the above options
							</p>
						) : (
							""
						)}
					</div>
					{/* Checkbox conditions */}
					<div
						className=""
						style={{ textAlign: "left", marginTop: "20px", fontSize: "14px" }}
					>
						<div className="" onChange={() => setCheckedOne(!checkedOne)}>
							<Checkbox
								checkColor="primary"
								width="60px"
								height="18px"
								name="hooks"
								id="checkbox_one"
								label="By sharing above details, I agree to KLI and its representatives
						contacting me through call, SMS, email or WhatsApp even if I am
						registered under NDNC. I also agree that I have read and
						understood the Privacy policy and agree to abide by the same."
								className="checkbox_form"
								color="g300"
							/>
						</div>
						{error && !checkedOne ? (
							<p className="checkbox_error">please select the checkbox</p>
						) : (
							""
						)}
					</div>
					<div
						className=""
						style={{
							textAlign: "left",
							margin: "8px 0 15px 0",
							fontSize: "14px",
						}}
					>
						<div className="" onChange={() => setCheckedTwo(!checkedTwo)}>
							<Checkbox
								checkColor="primary"
								width="70px"
								height="18px"
								name="hooks"
								id="checkbox_two"
								label="
							To undergo suitability analysis, please Click here. If you wish to
							bypass the suitability analysis please click on the checkbox. By
							selecting the checkbox, you declare to consciously bypass the
							recommended suitability module and purchase the policy based on
							your independent assessment."
								className="checkbox_form"
								color="g300"
							/>
						</div>
						{error && !checkedTwo ? (
							<p className="checkbox_error">please select the checkbox</p>
						) : (
							" "
						)}
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
