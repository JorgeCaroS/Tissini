import React, { Component } from "react";
import Categoria from "../categoria/Categoria";

class Categorias extends Component {
  state = {
    categorias: [
      { id: 1, image: "https://api.tissini.app/img/categories/textiles.png" },
      { id: 2, image: "https://api.tissini.app/img/categories/joyas.png" },
      { id: 3, image: "https://api.tissini.app/img/categories/concord.png" },
      { id: 4, image: "https://api.tissini.app/img/categories/naturales.png" },
    ],
  };

  componentDidMount() {
    console.log(this.props.categorias);
    //const categorias = this.props.categorias;
    const categorias = this.state.categorias;
    //this.setState({ categorias: categorias });
    console.log(this.state.categorias[0].image);
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
      <main>
        {Object.keys(this.state.categorias).map((key) => (
          <Categoria
            key={key}
            source={this.state.categorias[key].image}
            // handleClick1={this.handleClick1}
            // handleClick={this.handleClick}
          />
        ))}
       </main> 
      </div>
      
    );
  }
}

export default Categorias;
