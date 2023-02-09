import React from "react";
import { Heading2, Paragraph } from "./components/typography/Typography";
import Button from "./components/Buttons/Button";
import { TextField } from "./components/TextField/TextField";
import { Checkbox, Radio } from "./components/TextField/ButtonComponent";
import "./Form.css";

function Form() {
	return (
		<div className="container">
		<div className="form-container">
		{/* form */}
			<form action="">
				{/* heading */}
				<Heading2 color="b300">Kindly Enter Your Details</Heading2>
				<div style={{ display: "flex", alignItems: "start" }}>
					{/* Name field */}
					<TextField
						inputType="text"
						placeholderText="Enter full name"
						label="Full name*"
						error="Please enter your name"
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
							<Radio /> <p className="checkpara">Male</p> &nbsp;&nbsp;&nbsp;&nbsp;
							<Radio />
							<p className="checkpara">Female</p>
						</div>
					</div>
				</div>
				{/* Mobile number field */}
				<TextField
					inputType="number"
					placeholderText="Enter 10 digit mobile number"
					label="Mobile number*"
					error="Please enter valid mobile number"
				/>
				{/* Date of Birth field */}
				<TextField
					inputType="date"
					placeholderText="DD/MM/YYYY"
					label="Date of Birth*"
					error="Please enter your birth date"
				/>
				{/* email Address field */}
				<TextField
					inputType="email"
					placeholderText="Enter email address"
					label="Email Address*"
					focusColor="s300"
					error="Please enter your name"
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
						<Radio width="18px" height="18px" />{" "}
						<Paragraph color="b300" fontSize="12px" margin="0">
							less than 3 Lakhs
						</Paragraph>
						<Radio width="18px" height="18px" />{" "}
						<Paragraph color="b300" fontSize="12px" margin="0">
							3-5 Lakhs
						</Paragraph>
						<Radio width="18px" height="18px" />{" "}
						<Paragraph color="b300" fontSize="12px" margin="0">
							5-7 Lakhs
						</Paragraph>
						<Radio width="18px" height="18px" />{" "}
						<Paragraph color="b300" fontSize="12px" margin="0">
							7-10 Lakhs
						</Paragraph>
						<Radio width="18px" height="18px" />{" "}
						<Paragraph color="b300" fontSize="12px" margin="0">
							10+ Lakhs
						</Paragraph>
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
						registered under NDNC. I also agree that I have read and understood
						the Privacy policy and agree to abide by the same
					</Paragraph>
				</div>
				<div
					className=""
					style={{ display: "flex", textAlign: "left", margin: "8px 0 15px 0" }}
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
						recommended suitability module and purchase the policy based on your
						independent assessment.
					</Paragraph>
				</div>
				{/* submit button */}
				<div style={{ textAlign: "center" }}>
					<Button type="danger" rounded={true} textColor="">PROCEED</Button>
				</div>
			</form>
		</div>
		</div>
	);
}

export default Form;
