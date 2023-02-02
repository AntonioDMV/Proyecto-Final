import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
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
                <Form.Control type="password" placeholder="Password" {...register('password')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            

    );
};

export default LogIn;