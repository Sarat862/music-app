import { useContext } from "react";
import VolumeControls from "./VolumeControls/VolumeControls";
import TimeControls from "./TimeControls/TimeControls";
import { AudioContext } from "../../context/AudioContext";
import scss from "./Playbar.module.scss";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

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
                <VolumeControls />
                <TimeControls />
                <p>{formattedDuration}</p>
            </div>
        </div>
    )
}

export default Playbar;