import React from 'react'
import {Redirect, Route} from 'react-router'
// для передачи данных из state в AuthRoute его нужно завернуть в коннектор.
import {connect} from "react-redux";

// AuthRoute - свой класс, который мы написали, чтобы проверять аутентифицирован ли пользователь, и используем вместо Route
// если токен приходит из стейта по нашему запросу, значит пользователь авторизован -->
// осуществляем переход на запрашиваемую страницу, передавая нужные параметры во встроенный компонент Route

// если токен не приходит - отправляем пользователя на страницу "/login", при этом через state передаем путь,
// по которому пользователь хотел перейти (он сможет по нему перейти после отправки логина-пароля - свойство "next")


const AuthRoute = (props) => {
    if(props.app.loading) {
        return <p>Loading, please wait.</p>
    }
    if(props.auth.user_id) {
        return <Route {...props} />
    }
    return <Redirect to={{
        pathname: "/login",
        state: {next: props.location}
    }}/>
};


const mapStateToProps = state => ({auth: state.auth, app: state.app});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);