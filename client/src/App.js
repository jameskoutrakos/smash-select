import "./App.scss";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

import Selector from "./components/Selector/Selector";

class App extends Component {
  state = {
    currentCharacter: {},
    characters: [],
  };

  getCharacters = () => {
    axios
      .get("http://localhost:8080/characters")
      .then((response) => {
        this.setState({ characters: response.data });
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    console.log("APP MOUNTED");
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Selector
              characters={this.state.characters}
              getCharacters={this.getCharacters}
              {...routerProps}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
