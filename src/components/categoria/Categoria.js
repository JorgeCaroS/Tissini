import React from "react";

class Categoria extends React.Component {
  myRef = React.createRef();

  handleCategoria = () => {
    const { handleClick } = this.props;
    const nombreCategoria = this.props;
    const linkCategoria = this.props;

    handleClick(linkCategoria, nombreCategoria);

    console.log(linkCategoria);
  };

  render() {
    return (
      <React.Fragment>
        <div className="single-categoria">
          <img
            src={this.props}
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

export default Categoria;
