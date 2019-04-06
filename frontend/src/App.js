import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Register from "./containers/Register/Register";
import RegisterActivate from "./containers/Register/RegisterActivate/RegisterActivate";
import UserSettings from "./containers/UserSettings/UserSettings";
import {tokenLogin} from "./store/actions/token-login";
import MainPage from "./containers/MainPage/MainPage";
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        this.props.tokenLogin();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/register" component={Register} exact/>
                            <Route path="/register/activate" component={RegisterActivate}/>
                            <AuthRoute path="/users/:id" component={UserSettings}/>
                            <Route path="/" component={MainPage} exact/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    };
}

const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLogin())
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
