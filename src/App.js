import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.scss";

//Components
import Nav from "./components/nav";

//Pages
import Home from "./pages/home";
import Services from "./pages/services";
import Projets from "./pages/projets";
import About from "./pages/about";
import Contact from "./pages/contact";

//Routes
const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/services", name: "Services", Component: Services },
    { path: "/projets", name: "Projets", Component: Projets },
    { path: "/about", name: "About Us", Component: About },
    { path: "/contact", name: "Contact", Component: Contact },
];

function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

function App() {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        let vh = dimensions.height * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, [dimensions]);

    return (
        <React.Fragment>
            <Nav />
            <Switch>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </React.Fragment>
    );
}

export default App;
