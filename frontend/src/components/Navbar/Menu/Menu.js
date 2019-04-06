import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Menu extends Component {
    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const {username, user_id} = this.props.auth;
        return <Fragment>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Main</MenuItem>
                </ul>

                <ul className="navbar-nav ml-auto">
                    {user_id ? [
                        <li className="nav-item" key="username"><span className="navbar-text">
                            <NavLink className='navlink mr-2' to={"/users/" + user_id}>{username}</NavLink>
                        </span></li>,
                        <MenuItem to="/logout" key="logout">Log Off</MenuItem>
                    ] : [
                        <MenuItem to="/register" key="register">Registration</MenuItem>,
                        <MenuItem to="/login" key="login">Login</MenuItem>

                    ]}
                </ul>
            </div>
        </Fragment>
    }
}


const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);