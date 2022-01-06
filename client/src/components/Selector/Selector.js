import "./Selector.scss";

import { Component } from "react";

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

export default Selector;
