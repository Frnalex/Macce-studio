import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.scss";

//Components
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";

//Pages
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Projets from "./pages/projets/projets";
import About from "./pages/about/about";
import MentionsLegales from "./pages/mentionsLegales/mentions-legales";
import Footer from "./components/Footer/footer";

//Routes
const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/services", name: "Services", Component: Services },
    { path: "/projets", name: "Projets", Component: Projets },
    { path: "/about", name: "About Us", Component: About },
    { path: "/mentions-legales", name: "Mentions légales", Component: MentionsLegales },
];

//Debounce function
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
    const location = useLocation();

    //Rezise windows
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
            <Header dimensions={dimensions} />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            <Component dimensions={dimensions} />
                        </Route>
                    ))}
                </Switch>
            </AnimatePresence>
            <Footer />
        </React.Fragment>
    );
}

export default App;
