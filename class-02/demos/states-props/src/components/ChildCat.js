import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ChildCat extends React.Component {
    // class Dog extends Animal

    constructor(props) {
        super(props);
        this.state = {
            numberOfPets: 0
        }
    }

    increaseNoOfPets = () => {
        this.setState({
            numberOfPets: this.state.numberOfPets + 1
        })
    }

    render() {
        return (
            <>
                {/* <p>{this.props.catName}</p>
                <img onClick={this.increaseNoOfPets} src={this.props.catImg} alt={this.props.catName} width={300}/>
                <p>❤️ {this.state.numberOfPets}</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseNoOfPets} variant="top" src={this.props.catImg} />
                    <Card.Body>
                        <Card.Title>{this.props.catName}</Card.Title>
                        <Card.Text>
                        Click my head to pet me !
                        </Card.Text>
                        <Card.Text>
                        ❤️ {this.state.numberOfPets}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default ChildCat;