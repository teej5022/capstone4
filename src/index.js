import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { Navbar } from "./pages/navbar";
import Lord from "./pages/lord";


import "./styles.scss";


function Cap() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Lord" component={Lord} />
            </Switch>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cap />, rootElement);
