import { Route, Routes, Link } from "react-router-dom";
import DesignComponents from "./DesignComponents";
import Form from "./Form";
function App() {
	return (
		<div className="App">
		<Link to="/form">Click to see the Form</Link>
			<Routes>
			{/********* CUSTOMIZABLE DESIGN COMPONENTS *****************/}
			<Route path="/" element={<DesignComponents />} />
			{/********* FORM *****************/}
				<Route path="/form" element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
