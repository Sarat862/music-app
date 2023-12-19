import { useContext, useState, useEffect } from "react";
import { AudioContext } from "../../../context/AudioContext";
import secondsToMMSS from "../../../utils/secondsToMMSS";
import { Slider } from "@mui/material";

const TimeControls = () => {

    const [currentTime, setCurrentTime] = useState(0);

    const { currentTrack, audio} = useContext(AudioContext);
    const { duration} = currentTrack;

    const formattedCurrentTime = secondsToMMSS(currentTime);
    const sliderCurrentTime = Math.round((currentTime / duration) * 100);

    const handleChangeCurrentTime = (_, value) => {
        const time = Math.round(value / 100 * duration);
        setCurrentTime(time);
        audio.currentTime = time;
    }

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(audio.currentTime);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        }
    }, [audio.currentTime])

    return (
       <>
            <p>{formattedCurrentTime}</p>
            <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={handleChangeCurrentTime} />
       </> 
    )
}

export default TimeControls;