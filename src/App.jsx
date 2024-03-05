import Header from "./componenents/Header";
import MainPage from "./componenents/MainPage";
import { useLocation } from "react-router-dom";
import "./css/App.css";

function App () {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header currentPage={currentPage} />
      <MainPage currentPage={currentPage} />
    </div>
  );

}

export default App;