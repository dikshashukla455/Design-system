import Color from "./components/colors/Color";
import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
} from "./components/typography/Typography";

function App() {
	return (
		<div className="App">
			<p style={{ fontSize: "45px" }}>Typography</p>
			<Heading1 color="p400">H1 header on desktop</Heading1>
			<Heading2 color="t500">H2 header on desktop</Heading2>
			<Heading3 color="p500">H3 header on desktop</Heading3>
			<Heading4 color="p500">H4 header on desktop</Heading4>
			<Heading5 color="p500">H5 header on desktop</Heading5>
			<p style={{ fontSize: "25px" }}>Colors</p>
			<Color />
		</div>
	);
}

export default App;
