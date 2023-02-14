import { Route, Routes, Link } from "react-router-dom";
import AlertForm from "./AlertForm";
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
				{/************ALERT (when form submitted)**********/}
				<Route path="/alert" element={<AlertForm />} />
			</Routes>
		</div>
	);
}

export default App;
