import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();



    // localStorage.setItem('name', freddy )

    const submit = (data) => {
        console.log(data);
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token)
                navigate('/');
            })
            .catch(error => {
                if (error.response.status === 401) {
                    alert('credenciales incorrectas')
                }
                console.log(error);
            })
    }

    return (
        <div className='login-form'>
            <div className='login'>
                <div className='login-welcome' >
                    <h4>Welcome! Enter your email and password to continue</h4>
                </div>
                <div>
                    <h5>Test data</h5>
                    <div className='login-test'>
                        <div style={{display: 'flex'}}>
                            <i class="fa-solid fa-envelope"></i> <p>john@gmail.com</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <i class="fa-solid fa-lock"></i> <p>john1234</p>
                        </div>
                    </div>
                </div>
            </div>
            <Form className='loginForm' onSubmit={handleSubmit(submit)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email')} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;