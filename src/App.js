import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./styles.css";

class App extends React.Component {
  // Runs the first time the component is first created
  // constructor(props) {
  //   super(props);

  //   // Initialize state
  //   this.state = {
  //     lat: null,
  //     errorMessage: ``
  //   };

  // }

  // Alternative, one-liner to initialize state (Handled by Babel)
  state = { lat: null, errorMessage: `` };

  // Runs when the component mounts
  componentDidMount() {
    /* 
    / While, technically, location loader can sit in constructor() as well, 
    / it is Convention and Best Practise to make it sit in componentDidMount() 
    */
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Additive state setting async function
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        // Additive state setting async function
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // Render function returning JSX is mandatory for Class components
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <>
          <div>Error Message: {this.state.errorMessage}</div>
        </>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <>
          <SeasonDisplay lat={this.state.lat} />
        </>
      );
    }

    return (
      <>
        <Spinner text={`Please allow Location!`} />
      </>
    );
  }
}

export default App;
