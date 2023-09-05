import React from "react";
import Slider from './Slider';
import Card from './Card';
import Culture from "./Culture";
import UpcomingEvent from "./UpcomingEvent";

const Home =()=>{
    return(
        <>
            <Slider />
            <Card />
            <Culture />
            <UpcomingEvent />
        </>
    )
}
export default Home;