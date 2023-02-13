import React from "react";
import Color from "./components/colors/Color";
import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Paragraph,
} from "./components/typography/Typography";
import Button from "./components/Buttons/Button";
import { TextField, TextArea } from "./components/TextField/TextField";
import Dropdown from "./components/TextField/Dropdown";
import UploadFile from "./components/TextField/UploadFile";
import Tag from "./components/Tags/Tag";
import {
	Checkbox,
	Radio,
	Toggle,
} from "./components/TextField/ButtonComponent";
import Banner from "./components/Banner/Banner";
import Alert from "./components/Alerts/Alert";
import "./App.css";
import ConfirmBox from "./components/ConfirmationBox/ConfirmBox";
function DesignComponents() {
	return (
		<>
			{/*==================== TYPOGRAPHY COMPONENT =======================*/}
			<p style={{ fontSize: "45px" }}>Typography</p>
			{/*======== HEADINGS ========*/}
			<Heading1 color="p300">H1 header on desktop</Heading1>
			<Heading2 color="d400">H2 header on desktop</Heading2>
			<Heading3 color="w200">H3 header on desktop</Heading3>
			<Heading4 color="a100">H4 header on desktop</Heading4>
			<Heading5 color="t500">H5 header on desktop</Heading5>
			{/*======== PARAGRAPH (with its variants) ======*/}
			<h3>Body text</h3>
			<dl>
				<dt>Uppercase and large</dt>
				<dd>
					<Paragraph color="b300" fontSize="large" textTransform="uppercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Uppercase and small</dt>
				<dd>
					<Paragraph color="b300" fontSize="small" textTransform="uppercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Lowercase and large</dt>
				<dd>
					<Paragraph color="b300" fontSize="large" textTransform="Lowercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Lowercase and small</dt>
				<dd>
					<Paragraph color="b300" fontSize="small" textTransform="Lowercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Capitalize and default</dt>
				<dd>
					<Paragraph color="b300" textTransform="capitalize">
						This is a paragraph component.
					</Paragraph>
				</dd>
			</dl>
			{/*==================== COLORS COMPONENT ======================= */}
			<p style={{ fontSize: "30px" }}>Colors</p>
			<Color />
			{/*==================== BUTTONS (with its variants) COMPONENT ======================= */}
			<p style={{ fontSize: "40px" }}>Buttons</p>
			<span>Solid:</span>
			<Button type="danger" variant="default" fontSize="16px">
				{" "}
				{/* default varaint*/}
				Click Me
			</Button>
			<span>Outlined:</span>
			<Button variant="outlined">Click Me</Button> {/* outlined varaint*/}
			<span>None:</span>
			<Button variant="transparent" textColor="s400">
				{" "}
				{/* without border (transparent) varaint*/}
				Click Me
			</Button>
			{/*==================== TEXT FIELD COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Text Field</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				<TextField
					inputType="text"
					placeholderText="Enter your field"
					label="Label"
					description="This is a description"
					focusColor="s300"
				/>
				{/* Disable variant */}
				<TextField
					inputType="number"
					placeholderText="Enter your field"
					label="Label"
					description="This is a description"
					variant="disabled"
				/>
			</div>
			{/*==================== TEXTAREA COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Textarea</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				<TextArea
					placeholderText="Enter something"
					label="Label"
					description="This is a Textarea description"
					textareaFocusColor="a500"
					cols="35"
					rows="9"
				/>
				{/* disable variant */}
				<TextArea
					placeholderText="Enter something"
					label="Label"
					description="This is a Textarea description"
					textareaFocusColor="s500"
					variant="disabled"
					cols="35"
					rows="9"
				/>
			</div>
			{/*==================== DROPDOWN COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Dropdown</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				<Dropdown
					label="Label"
					description="This is a Dropdown description"
					placeholder="Choose your vehicle"
					Option1="Bus"
					Option2="Car"
					Option3="Cycle"
					Option4="Bike"
					focusColor="w500"
				/>
				{/* disable variant */}
				<Dropdown
					label="Label"
					description="This is a disabled dropdown description"
					variant="disabled"
					placeholder="Select item"
				/>
			</div>
			{/*==================== UPLOAD FILE COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Upload File</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				<UploadFile
					label="Label"
					description="Max file size is 2mb. Supported files are .csv and .xls   "
					acceptFiles=".pdf"
				/>
				{/*disable variant*/}
				<UploadFile
					label="Label"
					description="Max file size is 2mb. Supported files are .csv and .xls    "
					variant="disabled"
				/>
				{/**error variant */}
				<UploadFile
					label="Label"
					description="Max file size is 2mb. Supported files are .csv and .xls "
					variant="error"
				/>
			</div>
			{/*==================== TAGS COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Tags</p>
			Solid: {/* solid and rounded variant */}
			<Tag
				variant="solid"
				variantShape="rounded"
				tagName="Purple"
				tagColor="secondary"
				fontSize="14px"
			/>
			<Tag
				variant="solid"
				variantShape="rounded"
				tagName="Blue"
				tagColor="primary"
				fontSize="12px"
			/>
			{/* solid and rectangle variant */}
			<Tag
				variant="solid"
				variantShape="rectangle"
				tagName="Red"
				tagColor="danger"
				fontSize="14px"
			/>
			<Tag
				variant="solid"
				variantShape="rectangle"
				tagName="Green"
				tagColor="success"
				fontSize="12px"
			/>
			{/* solid and rounded variant */}
			<Tag
				variant="solid"
				variantShape="rounded"
				tagName="Pink"
				tagColor="accent"
				fontSize="14px"
			/>
			<Tag
				variant="solid"
				variantShape="rounded"
				tagName="tertiary"
				tagColor="tertiary"
				fontSize="12px"
			/>
			{/* solid and rectangle variant */}
			<Tag
				variant="solid"
				variantShape="rectangle"
				tagName="Golden"
				tagColor="warning"
				fontSize="14px"
			/>
			<Tag
				variant="solid"
				variantShape="rectangle"
				tagName="Grey"
				tagColor="grey"
				fontSize="12px"
			/>
			<br />
			<br />
			Outlined: {/* outlined and rounded variant */}
			<Tag
				variant="outlined"
				variantShape="rounded"
				tagName="Purple"
				tagColor="secondary"
				fontSize="14px"
			/>
			<Tag
				variant="outlined"
				variantShape="rounded"
				tagName="Blue"
				tagColor="primary"
				fontSize="12px"
			/>
			{/* outlined and rectangle variant */}
			<Tag
				variant="outlined"
				variantShape="rectangle"
				tagName="Red"
				tagColor="danger"
				fontSize="14px"
			/>
			<Tag
				variant="outlined"
				variantShape="rectangle"
				tagName="Green"
				tagColor="success"
				fontSize="12px"
			/>
			{/* outlined and rounded variant */}
			<Tag
				variant="outlined"
				variantShape="rounded"
				tagName="Pink"
				tagColor="accent"
				fontSize="14px"
			/>
			<Tag
				variant="outlined"
				variantShape="rounded"
				tagName="tertiary"
				tagColor="tertiary"
				fontSize="12px"
			/>
			{/* outlined and rectangle variant */}
			<Tag
				variant="outlined"
				variantShape="rectangle"
				tagName="Golden"
				tagColor="warning"
				fontSize="14px"
			/>
			<Tag
				variant="outlined"
				variantShape="rectangle"
				tagName="Grey"
				tagColor="grey"
				fontSize="12px"
			/>
			{/*==================== INPUT FIELD BUTTONS COMPONENT ======================= */}
			{/* checkbox */}
			<p style={{ fontSize: "20px" }}>Checkbox</p>
			<div className="" style={{ display: "flex", alignItems: "center" }}>
				<Checkbox checkColor="accent" />
				<p> default</p>
				<Checkbox variant="disabled" />
				<p>disabled</p>
			</div>
			{/* radio */}
			<p style={{ fontSize: "20px" }}>Radio</p>
			<div className="" style={{ display: "flex", alignItems: "center" }}>
				<Radio />
				<p>default </p>
				<Radio variant="disabled" />
				<p>disabled </p>
			</div>
			{/* toggle */}
			<p style={{ fontSize: "20px" }}>Toggle</p>
			<div className="" style={{ display: "flex", alignItems: "center" }}>
				<Toggle checkColor="success" /> <p> default </p>
				<Toggle variant="disabled" /> <p> disabled </p>
			</div>
			{/*==================== ALERT COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Alerts</p>
			<div
				className=""
				style={{
					display: "flex",
					justifyContent: "space-around",
					flexWrap: "wrap",
				}}
			>
				{/* information alert type */}
				<Alert type="information" message="There’s this thing." />
				{/* success alert type */}
				<Alert type="success" message="You did the thing!" />
				{/* error alert type */}
				<Alert
					type="error"
					message="Oh no! Fix the thing before you do it again."
				/>
				{/* warning alert type */}
				<Alert type="warning" message="The thing might happen..." />
			</div>
			{/*==================== BANNER COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Banner</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				{/* Default variant (simply by clicking on the banner) */}
				<Banner bannerText="This is an inline banner." BannerColor="primary" />
				{/* adding the cross (to close by clicking on it) based on the crossed variant  */}
				<Banner
					bannerText="This is an inline banner."
					BannerColor="warning"
					variant="crossed"
				/>
			</div>
			{/*==================== CONFIRMATION BOX COMPONENT ======================= */}
			<p style={{ fontSize: "35px" }}>Confirmation Box</p>
			<div
				className=""
				style={{ display: "flex", justifyContent: "space-around" }}
			>
				{/* Confirm dialog box */}
				<ConfirmBox
					type="confirm"
					label="Do the thing?"
					message="Doing the thing means that you’ll need to reset the system."
				/>
				{/* Confirm dialog box */}
				<ConfirmBox
					type="delete"
					label="Do you want to delete?"
					message="Once you delete this, it will be gone forever. Make sure you give thanks to it first."
				/>
			</div>
		</>
	);
}

export default DesignComponents;
