import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Statistics from "../Statistics";
import Settings from "../Settings";
import About from "../About";
import NotFound from "../NotFound";

const LinksRouter = () => {

    const linksSetup = [
        {path: '/', element: <Home/>},
        {path: '/statistics', element: <Statistics/>},
        {path: '/settings', element: <Settings/>},
        {path: '/about', element: <About/>},
        {path: "/budget", element: <Home/>},
        {path: "*", element: <NotFound/>},
    ]

    return (
        <Routes>
            {
                linksSetup.map((i, pos) => (<Route key={pos} path={i.path} element={i.element}/>
                ))}
        </Routes>

    )
}

export default LinksRouter;
