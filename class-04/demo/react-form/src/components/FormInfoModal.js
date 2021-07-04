import React from 'react'
import {Button,Modal} from 'react-bootstrap/';

class FormInfoModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Infor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.name}</p>
                        <p>{this.props.height}</p>
                        <p>{this.props.favoriteCatBreed}</p>
                        <p>{this.props.likeCat}</p>
                        <p>Do I like cats: { this.props.likeCat ? 'yes' : 'no'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default FormInfoModal;
