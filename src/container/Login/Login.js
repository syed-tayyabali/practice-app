import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Register from '../Register/Register';
import classes from './Login.module.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: false
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        // if (rules.isEmail) {
        //     const pattern = /^\d+$/;
        //     isValid = pattern.test(value) && isValid;
        // }
        if (rules.numeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updateControls });
    }

    switchOffModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp };
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        let res = localStorage.getItem(`${this.state.controls.email.value}`);
        if (res === null || res === undefined) {
            alert('invalid email');
            return;
        }
        let user = JSON.parse(res);
        if (user.password !== this.state.controls.password.value) {
            alert('invalid password');
            return;
        }
        return this.props.history.replace('/');
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        valueType={formElement.id}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}

                <Button btnType='Success'>Submit</Button>
            </form>
        );
        return (
            <div className={classes.Login}>
                <h2>Login</h2>
                {form}
                <Button
                    clicked={this.switchOffModeHandler}
                    btnType='Danger'>SWITCH TO SIGNUP</Button>

                <Modal show={this.state.isSignUp} modalClosed={this.switchOffModeHandler}>
                    <Register />
                    <Button btnType='Danger' clicked={this.switchOffModeHandler}>close</Button>
                </Modal>
            </div>
        );
    }
}

export default Auth;