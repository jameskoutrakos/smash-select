import "./CharacterPage.scss";

import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CharacterPage extends Component {
  state = {
    currentCharacter: {},
  };

  getCurrentCharacter = (id) => {
    axios
      .get(`http://localhost:8080/characters/select/${id}`)
      .then((response) => {
        this.setState({ currentCharacter: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.getCurrentCharacter(1);
    console.log("CHARACTER PAGE MOUNTED");
  };

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if (id) {
      if (prevState.getCurrentCharacter !== id) {
        this.getCurrentCharacter(id);
      }
    } else if (!id) {
      this.getCurrentCharacter("1");
    }
  }

  render() {
    const { name, squarePicture, series, smashDebut, yearIntroduced } =
      this.state.currentCharacter;

    return (
      <article>
        <img src={squarePicture} alt={name} />
        <p>{name}</p>
        <p>{yearIntroduced}</p>
      </article>
    );
  }
}

export default CharacterPage;
