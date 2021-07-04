import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Form, Button } from 'react-bootstrap/';
import FormInfoModal from './FormInfoModal';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            height:'',
            likeCat:false,
            favoriteCatBreed:'',
            showModal: false
        }
    }


    handleClose = () =>{
        this.setState({
            showModal:false
        })
    }

    submitForm = (event) =>{
        event.preventDefault();
        // console.log('inside submit function')
        this.setState ({
            name:event.target.name.value,
            height:event.target.height.value,
            likeCat:event.target.likeCat.checked,
            favoriteCatBreed: event.target.favoriteCatBreed.value,
            showModal:true
        })

        console.log(this.state.name);
    }

    render() {
        return (
            <>
                <p>in Main</p>
                <Form onSubmit={this.submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicInfo">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name='name' />
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" placeholder="Enter your height" name='height' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Do you like Cats ?" name='likeCat'/>
                    </Form.Group>

                    <Form.Group aria-label="Default select example">
                        <Form.Label>choose your favorite cat breed</Form.Label>
                        <Form.Control as='select' name='favoriteCatBreed'>
                        <option>Open this select menu</option>
                        <option value="Angora">Angora</option>
                        <option value="Baladi">Baladi</option>
                        <option value="Persian">Persian</option>
                        </Form.Control>
                    </Form.Group>
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <FormInfoModal
                    show = {this.state.showModal}
                    handleClose = {this.handleClose}
                    name = {this.state.name}
                    height = {this.state.height}
                    likeCat = {this.state.likeCat}
                    favoriteCatBreed = {this.state.favoriteCatBreed}
                />
            </>
        )
    }
}

export default Main;
