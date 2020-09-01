import React from "react";
import "../banner.scss";

class Banner extends React.Component {
  state = {
    categorias: [],
    x: 0,
  };
  myRef = React.createRef();

  render() {
    return (
      <React.Fragment>
        <div
          className="single-banner"
          style={{ transform: `translateX(${this.props.x}%)` }}
        >
          <img
            src={this.props.source}
            alt={this.props}
            onClick={this.handleCategoria}
            ref={this.myRef}
            link={this.props}
          />

          <br></br>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
