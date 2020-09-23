import React, { useState } from "react";
const PopupContext = React.createContext();

function PopupContextProvider({ children }) {
	const [popup, setPopup] = useState(false);

	const togglePopup = () => {
		setPopup((prevState) => !prevState);
	};

	return (
		<PopupContext.Provider value={{ popup, togglePopup }}>
			{children}
		</PopupContext.Provider>
	);
}

export { PopupContextProvider, PopupContext };
