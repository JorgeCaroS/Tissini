import React, { Component } from "react";
import Categoria from "../categoria/Categoria";

class Categorias extends Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    console.log(this.props.categorias);
    const categorias = this.props.categorias;

    this.setState({ categorias: categorias });

    console.log(categorias);
  }

  render() {
    return (
      <div className="categoriadiv">
        <main>
          {Object.keys(this.state.categorias).map((key) => (
            <Categoria
              key={key}
              source={
                "https://api.tissini.app/" + this.state.categorias[key].image
              }
            />
          ))}
        </main>
      </div>
    );
  }
}

export default Categorias;
