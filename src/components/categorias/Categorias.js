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
      //   <div className="Gallery">
      //      {this.props.categorias.map((categoria) => (
      //      <Categorias
      //      key={categoria.nombre}
      //       source={categoria.image}
      //      select={handleSelect}
      //       selected={nameSelected === categoria.nombre}
      //      click={handleClicked}
      //      clicked={elementClicked === categoria.nombre}
      //     name={categoria.nombre}
      //     />
      //  ))}
      // </div>

      <div className="categoriadiv">
        {Object.keys(this.state.categorias).map((key) => (
          <Categoria
            key={key}
            // details={this.state.peliculas[key]}
            // handleClick1={this.handleClick1}
            // handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Categorias;
