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
					<Paragraph color="b300" Font_size="large" Text_transform="uppercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Uppercase and small</dt>
				<dd>
					<Paragraph color="b300" Font_size="small" Text_transform="uppercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Lowercase and large</dt>
				<dd>
					<Paragraph color="b300" Font_size="large" Text_transform="Lowercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Lowercase and small</dt>
				<dd>
					<Paragraph color="b300" Font_size="small" Text_transform="Lowercase">
						This is a paragraph component.
					</Paragraph>
				</dd>
				<dt>Capitalize and default</dt>
				<dd>
					<Paragraph color="b300" Text_transform="capitalize">
						This is a paragraph component.
					</Paragraph>
				</dd>
			</dl>
			<p style={{ fontSize: "30px" }}>Colors</p>
			<Color />
      <p style={{ fontSize: "40px" }}>Buttons</p>
      <span>Solid:</span><Button type="secondary" variant="default">Click Me</Button>
      <span>Outlined:</span><Button variant="outlined">Click Me</Button>
      <span>None:</span><Button variant="transparent">Click Me</Button>
		</div>
	);
}

export default App;
