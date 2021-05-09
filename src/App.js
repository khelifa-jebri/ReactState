
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Profile from "./components/Profile.jsx"
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    console.log("constructor()")
    super();

    this.state = {
      shows: false
    };
  }

  componentDidMount() {
    console.log("componentDidMount()")
  }

  componentDidUpdate() {
    console.log("componentDidMount()");
  }

  componentWillUnmount() {
    console.log("componentDidMount()");

  }

  Visibility = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  render() {
    console.log("render()")
    return (
      <div className="App">
        <header className="App-header">
          <Button style={{ margin: '2%' }} variant="primary" onClick={this.Visibility}>
            {this.state.shows ? "Hide my profile" : "Show my profile"}
          </Button>
          {this.state.shows ? (<h5> Click the button for hide my profile </h5>) :
            (<h5> Click the button for show my profile </h5>)}
          {this.state.shows && <Profile />}
        </header>
      </div>
    );
  }
}

export default App;
