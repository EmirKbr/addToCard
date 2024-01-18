import React, { Component } from 'react'
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default class Membership extends Component {

    state = { email: "", password: "", city: ""}

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db.", 2);
        alertify.success(this.state.password + " added to db.", 2);
        alertify.success(this.state.city + " added to db.", 2);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email' placeholder='Enter email' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' placeholder='Enter password' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='City'>City</Label>
                        <Input type='select' name='city' id='city' placeholder='City' onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Erzurum</option>
                            <option>Adana</option>
                            <option>Antalya</option>
                        </Input>
                    </FormGroup>
                    <Button color="primary" type='submit'>Save</Button>
                </Form>
            </div>
        )
    }
}
