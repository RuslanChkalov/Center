import React from 'react';
import {MainPage} from './mainpage';
import {DoctorsPage} from './doctorspage';
import {DirectionsPage} from './directionspage';
import {SchedulePage} from './schedulepage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function MainRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/doctors">
                        <DoctorsPage/>
                    </Route>
                    <Route path="/directions">
                        <DirectionsPage/>
                    </Route>
                    <Route path="/schedule">
                        <SchedulePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
