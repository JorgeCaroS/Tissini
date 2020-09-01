import React, { Component } from "react";
import Categoria from "../categoria/Categoria";
import Banner from "../banner/Banner";
import Slider from "react-slick";
import Categorias from "../categorias/Categorias";

class Catalogo extends Component {
  state = {
    categorias: [],
    x: 0,
    catalogo: [],
  };

  componentDidMount() {
    console.log(this.props.categorias[0].categories);
    const categorias = this.props.categorias[0].categories;
    this.setState({ categorias: categorias });
    const catalogo = this.props.catalogo.products[0].images;
    this.setState({ catalogo: catalogo });
    console.log(this.props.catalogo.products[0].images);
  }

  render() {
    const goLeft = () => {
      this.state.x === 0
        ? this.setState({ x: -100 * (this.state.categorias.length - 5) })
        : this.setState({ x: this.state.x + 100 });
      console.log(this.state.x);
    };

    const goRight = () => {
      this.state.x === -100 * (this.state.categorias.length - 5)
        ? this.setState({ x: 0 })
        : this.setState({ x: this.state.x - 100 });
      console.log(this.state.x);
    };
    return (
      <div className="main">
        <div className="catalogodiv">
          {Object.keys(this.state.categorias).map((key) => (
            <Banner
              key={key}
              source={
                "https://api.tissini.app/" + this.state.categorias[key].image
              }
              x={this.state.x}
            />
          ))}
        </div>
        <button id="goLeft" onClick={goLeft}>
          ←
        </button>
        <button id="goRight" onClick={goRight}>
          →
        </button>

        <div className="gallery">
          {Object.keys(this.state.catalogo).map((key) => (
            <Categoria
              key={key}
              source={"https://api.tissini.app/" + this.state.catalogo[key].url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Catalogo;
