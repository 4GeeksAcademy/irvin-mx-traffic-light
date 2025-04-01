import React, {useState} from "react"

import "../../styles/index.css"

//My Styles
const topTrafficLightSectionStyles = {
    width: "50px",
    height: "100px",
    backgroundColor: "white",
    marginLeft:"100px"
}

const bodyTrafficLightStyles = {
    width: "250px",
    height:"70vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const TrafficLight = ()=>{

    //Hooks
    const [color,setColor] = useState("")

    return (
        <div>
            <div style={topTrafficLightSectionStyles}></div>
            <div style={bodyTrafficLightStyles}>
                <div  onClick={(e)=> setColor("bg-danger") } className={`bg-danger light ${color === "bg-danger"? "selected shadow-lg": ""}`} ></div>
                <div  onClick={(e)=> setColor("bg-warning") } className={`bg-warning light ${color ==="bg-warning"? "selected shadow-lg": ""}`}></div>
                <div  onClick={(e)=> setColor("bg-success")} className={`bg-success light ${color === "bg-success" ? "selected shadow-lg" : ""}`} ></div>
            </div>
        </div>
    )
}

export default TrafficLight