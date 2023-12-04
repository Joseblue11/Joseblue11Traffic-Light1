import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");
	return (
		<div className="container">
			<div id="stick"></div>
			<div id="frame">
			    <div onClick={() => setSelected('red')} id="red-light" className={`light ${selected === 'red'? 'selected' : ''}`}></div>
				<div onClick={() => setSelected('yellow')} id="yellow-light" className={`light ${selected === 'yellow'? 'selected' : ''}`}></div>
				<div onClick={() => setSelected('green')} id="green-light" className={`light ${selected === 'green'? 'selected' : ''}`}></div>
			</div>
		</div>
	);
};

export default Home;
