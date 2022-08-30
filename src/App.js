import React, { useState, createContext } from "react";
import "./App.css";
import DogCaring from "./components/DogCaring";
import Town from "./components/Town";

export const AppContext = createContext();

const App = () => {
	const CounterProvider = (props) => {
		const [counter1, setCounter1] = useState(50);
		const [counter2, setCounter2] = useState(0);

		return (
			<AppContext.Provider
				value={{
					counter1,
					setCounter1,
					counter2,
					setCounter2,
				}}>
				{" "}
				{props.children}
			</AppContext.Provider>
		);
	};

	return (
		<CounterProvider>
			<DogCaring />
		</CounterProvider>
	);
};
export default App;
