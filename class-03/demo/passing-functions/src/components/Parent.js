import React from 'react';
import ChildCat from './ChildCat';
import sherryImage from './assets/sherry2.jpg'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cannedTunaCabinet: 15
        }
    }

    decreaseCannedTunaCabinet = ()=>{
        if(this.state.cannedTunaCabinet >0) {
            this.setState({
                cannedTunaCabinet: this.state.cannedTunaCabinet - 1
            })
        } 
    }

    render() {
        return (
            <>
                <h3>Parent Component</h3>
                <p>🗄️ Number of Canned Tuna in Cabinet {this.state.cannedTunaCabinet}</p>

                <ChildCat decreaseTuna={this.decreaseCannedTunaCabinet} catName='Sherry' catImg={sherryImage} />

                <ChildCat decreaseTuna={this.decreaseCannedTunaCabinet} catName='Luly' catImg="https://www.thesprucepets.com/thmb/ke0i6JP3D7egC-6IWSneukqBaZo=/1414x1414/smart/filters:no_upscale()/GettyImages-1140917170-727bc42801da47c4ace4eb34940d2120.jpg"/>
            </>
        )
    }
}

export default Parent;