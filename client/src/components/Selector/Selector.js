import "./Selector.scss";

import { Component } from "react";
import { Link } from "react-router-dom";

class Selector extends Component {
  componentDidMount = () => {
    console.log("SELECTOR MOUNTED");
    this.props.getCharacters();
  };

  render() {
    return (
      <article className="select">
        <section className="select__container">
          <h1 className="select__header">The Smash Bros Select</h1>
          <ul className="select__roster">
            {this.props.characters &&
              this.props.characters.map((character) => {
                return (
                  <Link
                    to={`/${character.id}`}
                    className="select__slot"
                    key={character.id}
                  >
                    <img src={character.squarePicture} alt={character.name} />
                    <p className="select__name">{character.name}</p>
                  </Link>
                );
              })}
          </ul>
        </section>
      </article>
    );
  }
}

export default Selector;
