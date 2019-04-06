import React, {Component} from 'react';
import axios from 'axios';
import {USERS_URL} from "../../api-urls";
import {connect} from "react-redux";


class UserForm extends Component {
    constructor(props) {
        super(props);
        const {first_name, last_name, email} = props.user;
        this.state = {
            user: {
                first_name, last_name, email,
                password: '',
                new_password: '',
                new_password_confirm: ''
            },
            submitEnabled: true,
            errors: {}
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({...this.state, submitEnabled: false});
        const currentUserId = this.props.auth.user_id;
        console.log(this.props.auth, 'this.props.auth в  UserForm');
        axios.patch(USERS_URL + currentUserId + '/', this.state.user, {
            headers: {'Authorization': 'Token ' + localStorage.getItem('auth-token')}
        }).then(response => {
            console.log(response);
            this.props.onUpdateSuccess(response.data);
            // сброс ошибок
            this.setState(prevState => ({
                ...prevState,
                errors: {},
                submitEnabled: true
            }));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            this.setState(prevState => ({
                ...prevState,
                errors: error.response.data,
                submitEnabled: true
            }));
        });
    };

    inputChanged = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [fieldName]: value
            }
        });
    };

    showErrors = (name) => {
        if(this.state.errors && this.state.errors[name]) {
            return this.state.errors[name].map((error, index) =>
                <p className="text-danger" key={index}>{error}</p>
            );
        }
        return null;
    };

    render() {
        const {first_name, last_name, email, password, new_password, new_password_confirm} = this.state.user;
        return <form onSubmit={this.submitForm}>
            {this.showErrors('non_field_errors')}
            <div className="form-group">
                <label>Имя</label>
                <input type="text" className="form-control" name="first_name" value={first_name}
                       onChange={this.inputChanged}/>
                {this.showErrors('first_name')}
            </div>
            <div className="form-group">
                <label>Фамилия</label>
                <input type="text" className="form-control" name="last_name" value={last_name}
                       onChange={this.inputChanged}/>
                {this.showErrors('last_name')}
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Email</label>
                <input type="text" className="form-control" name="email" value={email}
                       onChange={this.inputChanged}/>
                {this.showErrors('email')}
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Старый пароль</label>
                <input type="password" className="form-control" name="password" value={password}
                       onChange={this.inputChanged}/>
                <small className="form-text text-muted">Введите пароль, чтобы подтвердить внесённые изменения.</small>
                {this.showErrors('password')}
            </div>
            <div className="form-group">
                <label>Новый пароль</label>
                <input type="password" className="form-control" name="new_password" value={new_password}
                       onChange={this.inputChanged}/>
                {this.showErrors('new_password')}
            </div>
            <div className="form-group">
                <label>Подтверждение пароля</label>
                <input type="password" className="form-control" name="new_password_confirm" value={new_password_confirm}
                       onChange={this.inputChanged}/>
                {this.showErrors('new_password_confirm')}
            </div>
            <button disabled={!this.state.submitEnabled} type="submit"
                    className="btn btn-primary">Сохранить
            </button>
        </form>
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);