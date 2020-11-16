import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Views/Components/Core/Header";
import MoviePage from "./Views/Components/Core/MoviePage";
import Home from "./Views/Components/Core/Home";
import NotFound from "./Views/Components/Core/NotFound";
import Footer from "./Views/Components/Core/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/Movies/:id" component={MoviePage} />
                <Route path="/Movies" component={Home} />
                <Route path="/NotFound/404" component={NotFound} />
                <Redirect exact from="/" to="/Movies" />
                <Redirect to="/NotFound/404" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
