import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TrafficLight from "./TrafficLight"

//MyStyles
const homeDivContainer = {
	width:"100%",
	height:"100vh"
}

//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex justify-content-center homeDivContainer bg-dark"  style={homeDivContainer}>
			<TrafficLight/>
		</div>
	);
};

export default Home;