import React from "react"

//My Styles
const topTrafficLightSectionStyles = {
    width: "50px",
    height: "100px",
    backgroundColor: "black",
    marginLeft:"100px"
}

const bodyTrafficLightStyles = {
    width: "250px",
    height:"70vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const trafficLightCirclesStyles = {
    width: "180px",
    height: "180px",
    backgroundColor: "white",
    borderRadius: "50%",
}

const TrafficLight = ()=>{
    return (
        <div>
            <div style={topTrafficLightSectionStyles}></div>
            <div style={bodyTrafficLightStyles}>
                <div style={trafficLightCirclesStyles}></div>
                <div style={trafficLightCirclesStyles}></div>
                <div style={trafficLightCirclesStyles}></div>
            </div>
        </div>
    )
}

export default TrafficLight