import { useState } from "react";
import trackList from "../../assets/trackList";
import Track from "../../components/Track/Track";
import scss from "./MainPage.module.scss";
import { Input } from "@mui/material";

const runSearch = (query) => {
    if (!query) {
        return trackList;
    }
    const lowerCaseQuery = query.toLowerCase();
    return trackList.filter((track) => track.title.toLowerCase().includes(lowerCaseQuery) || 
    track.artists.toLowerCase().includes(lowerCaseQuery));
}

const MainPage = () => {

    const [tracks, setTracks] = useState(trackList);

    const handleChange = (event) => {
        setTracks(runSearch(event.target.value));
    }

    return (
        <div className={scss.search}>
            <Input className={scss.input} placeholder="Search tracks" onChange={handleChange} />
            <div className={scss.list}>
                {tracks.map((track) => <Track key={track.id} {...track} /> )}
            </div>
        </div>
    ) 
}

export default MainPage;