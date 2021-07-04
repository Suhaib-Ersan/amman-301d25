import React from 'react';
import Parent from './components/Parent';

class App extends React.Component {
  render() {
    return(
      <>
        <h1>States and Props</h1>
        <p>welcome to my webpage</p>
        <Parent/>
      </>
    )
  }
}

export default App;