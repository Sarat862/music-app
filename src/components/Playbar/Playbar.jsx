import { useContext, useState, useEffect } from "react";
import { AudioContext } from "../../context/AudioContext";
import scss from "./Playbar.module.scss";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { Slider, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

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

const Playbar = () => {


    const {handleToggleAudio, currentTrack, isPlaying} = useContext(AudioContext);

    const {title, artists, preview, duration} = currentTrack;

    const formattedDuration = secondsToMMSS(duration);

    return (
        <div className={scss.playbar}>
            <img className={scss.preview} src={preview} alt="" />
            <IconButton onClick={() => handleToggleAudio(currentTrack)}>
                {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <div className={scss.credits}>
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <div className={scss.slider}>
                <TimeControls />
                <p>{formattedDuration}</p>
            </div>
        </div>
    )
}

export default Playbar;