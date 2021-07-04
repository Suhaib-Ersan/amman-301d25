import React from 'react'; // for including classes functions from react library
import Button from './components/Button';
import Board from './components/Board';
import './App.css';

// class App will inherit the React class that has a Component (class)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My First React App 301d25</h1>
        <p>hello to my website</p>
        {/* <button>Click me!</button> */}
        <Button />
        <Board />

      </div>
    )
  }
}

export default App;