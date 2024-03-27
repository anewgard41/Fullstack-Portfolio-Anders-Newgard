import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";
import "./css/App.css";

function App () {
  const currentPage = useLocation().pathname;

  return (
    <main className="h-[100vh]">
        <Nav currentPage={currentPage} />
      <MainPage currentPage={currentPage} />
    </main>
  );

}

export default App;