import React from "react";

class Categoria extends React.Component {
  myRef = React.createRef();

  
  render() {
     // console.log(this.props.source)
    return (
      <React.Fragment>
        <div className="single-categoria">
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

export default Categoria;
