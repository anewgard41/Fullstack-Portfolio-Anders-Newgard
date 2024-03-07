import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";
import "./css/App.css";

function App () {
  const currentPage = useLocation().pathname;

  return (
    <div>
        <Nav currentPage={currentPage} />
      <MainPage currentPage={currentPage} />
    </div>
  );

}

export default App;