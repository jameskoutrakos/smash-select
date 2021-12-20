import "./App.scss";

import { Component } from "react";
import axios from "axios";

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
    this.getCharacters();
  };

  render() {
    return (
      <article className="select">
        <section className="select__container">
          <h1 className="select__header">The Smash Bros Select</h1>
          <ul className="select__roster">
            {this.state.characters &&
              this.state.characters.map((character) => {
                return (
                  <li className="select__slot" key={character.id}>
                    <img src={character.squarePicture} alt={character.name} />
                    <p>{character.name}</p>
                  </li>
                );
              })}
          </ul>
        </section>
      </article>
    );
  }
}

export default App;
