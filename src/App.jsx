import MainPage from "./pages/MainPage/MainPage";
import Playbar from "./components/Playbar/Playbar";
import scss from "./global.module.scss";

const App = () => (
    <div className={scss.wrapper}>
        <MainPage />
        <Playbar />
    </div>
)

export default App;
