import React, { useState } from "react";
import { Container, Row, Card, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap'
function Register() {
    let [state, setState] = useState({
        user: {
            userName: '',
            email: '',
            password: ''
        }
    });
    let updateInput = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value,

            }
        })
    };
    let register = (e) => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <Container className="mt-3">
                <Row>
                    <Col md={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{ backgroundColor: '#ffc107' }}>
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body style={{ backgroundColor: '#f7f5f0' }}>
                                <Form>
                                    <FormGroup className="mb-3">
                                        <FormControl
                                            name='userName'
                                            onChange={updateInput}
                                            type='text' placeholder="UserName" />

                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormControl
                                            name='email'
                                            onChange={updateInput}
                                            type='email'
                                            placeholder="Email" />

                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormControl
                                            name='password'
                                            onChange={updateInput}
                                            type='password'
                                            placeholder="Password"
                                        />

                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Button
                                            onClick={register}
                                            variant='warning'
                                            type='submit'>
                                            Register
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Register;