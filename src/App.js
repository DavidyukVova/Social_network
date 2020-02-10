import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Row noGutters={true}>
                                <Navbar state={props.state.sidebar} />

                                <Route path={`/profile`}
                                       render={() => <Profile
                                           profilePage={props.state.profilePage}
                                           dispatch={props.dispatch}
                                       />}
                                       key="profile"/>
                                <Route path={`/dialogs`} render={() => <Dialogs state={props.state.dialogPage} />} key="dialogs"/>
                                <Route path={`/news`} component={News} key="news"/>
                                <Route path={`/music`} component={Music} key="music"/>
                                <Route path={`/settings`} component={Settings} key="settings"/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BrowserRouter>
    );
}
export default App;
