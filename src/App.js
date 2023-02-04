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
function App() {
	return (
		<div className="App">
			<p style={{ fontSize: "45px" }}>Typography</p>
			<Heading1 color="p300">H1 header on desktop</Heading1>
			<Heading2 color="d400">H2 header on desktop</Heading2>
			<Heading3 color="w200">H3 header on desktop</Heading3>
			<Heading4 color="a100">H4 header on desktop</Heading4>
			<Heading5 color="t500">H5 header on desktop</Heading5>
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
			<p style={{ fontSize: "30px" }}>Colors</p>
			<Color />
			<p style={{ fontSize: "40px" }}>Buttons</p>
			<span>Solid:</span>
			<Button type="danger" variant="default">
				Click Me
			</Button>
			<span>Outlined:</span>
			<Button variant="outlined">Click Me</Button>
			<span>None:</span>
			<Button variant="transparent">Click Me</Button>
			<p style={{ fontSize: "35px" }}>Text Field</p>
			<TextField
				inputType="text"
				placeholderText="Enter your field"
				label="Label"
				description="This is a description"
				focusColor="p300"
			/>
			<TextField
				inputType="number"
				placeholderText="Enter your field"
				label="Label"
				description="This is a description"
				variant="disabled"
			/>
			<p style={{ fontSize: "35px" }}>Textarea</p>
			<TextArea
				placeholderText="Enter something"
				label="Label"
				description="This is a Textarea description"
				textareaFocusColor="a500"
			/>
			<TextArea
				placeholderText="Enter something"
				label="Label"
				description="This is a Textarea description"
				textareaFocusColor="s500"
				variant="disabled"
			/>
			<p style={{ fontSize: "35px" }}>Dropdown</p>
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
			<br />
			<Dropdown
				label="Label"
				description="This is a disabled dropdown description"
				variant="disabled"
				placeholder="Select item"
			/>
			<p style={{ fontSize: "35px" }}>Upload File</p>
			<UploadFile
				label="Label"
				description="Max file size is 2mb. Supported files are .csv and .xls"
				acceptFiles=".pdf"
			/>
			<br />
			<UploadFile
				label="Label"
				description="Max file size is 2mb. Supported files are .csv and .xls"
				variant="disabled"
				
			/>
			<p style={{ fontSize: "35px" }}>Tags</p>
			<Tag variant="solid" variantShape="rounded" tagName="red"/>
			<Tag variant="solid" variantShape="rectangle" tagName="blue"/>
			<Tag variant="outlined" variantShape="rounded" tagName="orange"/>
			<Tag variant="outlined" variantShape="rectangle" tagName="green"/>
		</div>
	);
}

export default App;
