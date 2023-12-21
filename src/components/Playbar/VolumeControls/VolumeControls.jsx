import { useContext, useState } from "react";
import { AudioContext } from "../../../context/AudioContext";
import { Slider } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";


const VolumeControls = () => {

    const [currentSound, setCurrentSound] = useState(0.6);

    const { audio} = useContext(AudioContext);

    const handleChangeSound = (_, value) => {
        setCurrentSound(value);
        audio.volume = value;
    }
    
    return (
        <>
            <VolumeDown />
            <Slider size="small" min={0} step={0.01} max={1} value={currentSound} onChange={handleChangeSound} />
            <VolumeUp />
        </>
    )
}

export default VolumeControls;