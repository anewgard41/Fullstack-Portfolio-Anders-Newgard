import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainPage(currentPage) {
    currentPage = currentPage.currentPage;
// the useEffect hook allows us to set the document title after the component renders
    useEffect(() => {
        document.title = currentPage.charAt(1).toUpperCase() + currentPage.slice(2) + " | Anders Newgard";
        // the dependency array ensures that this effect runs only once, after the component is first rendered
    }, [currentPage]);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default MainPage;