import React, { useState, useEffect, useContext } from 'react'
import Input from '../input/input'
import useSignupForm from '../../hook/useSignup'
import { ThemeContext } from '../../context/themecontext'

import '../../App.css'

const SITE_KEY = "6LcmYOsjAAAAAFk2iJdrtUv4hvnmRWyV1RenDxJh";

function Form() {
    const { values, errors, handleChange } = useSignupForm();
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const context = useContext(ThemeContext)
    const { themes, toggleTheme } = context


    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
        script.async = true;
        script.onload = () => {
            window.grecaptcha.enterprise.ready(() => {
                window.grecaptcha.enterprise.execute(SITE_KEY, { action: 'signup' }).then(function (token) {
                    setRecaptchaToken(token)
                });
            });
        };
        document.body.appendChild(script);
    }, []);



    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (recaptchaToken) {
            if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
                alert(JSON.stringify(values))
            }
        } else {
            alert("There is an Error!");
        }
    }
    return (
        <div className='form-container' id={themes}>
            <div className='form-content'>
                <h3 className='form-title'>Signup Form</h3>

                <form onSubmit={onHandleSubmit} id='signup-form'>
                    <div className="form-section">
                        <Input
                            type={'text'}
                            value={values.firstName}
                            handleInputchange={handleChange}
                            placeholder={'type first name..'}
                            labelvalue={'First Name'}
                            inputname={'firstname'}
                            errorvalue={errors.firstName}
                        />
                        <Input
                            type={'text'}
                            value={values.lastName}
                            handleInputchange={handleChange}
                            placeholder={'type last name..'}
                            labelvalue={'Last Name'}
                            inputname={'lastname'}
                            errorvalue={errors.lastName}
                        />
                        <Input
                            type={'email'}
                            value={values.email}
                            handleInputchange={handleChange}
                            placeholder={'type email..'}
                            labelvalue={'Email'}
                            inputname={'email'}
                            errorvalue={errors.email}
                        />
                        <Input
                            type={'password'}
                            value={values.password}
                            handleInputchange={handleChange}
                            placeholder={'type password..'}
                            labelvalue={'Password'}
                            inputname={'pwd'}
                            errorvalue={errors.password}
                        />
                        <span className='btn-block'>
                            <button className='form-submit' type='submit'>Sign Up</button>
                            {themes === "light" ? <img onClick={() => toggleTheme()} className='toggle-icon' alt='toggle-icon' src='/moon.png' /> : <img onClick={() => toggleTheme()} className='toggle-icon' alt='toggle-icon' src='/sun.png' />}
                        </span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form
