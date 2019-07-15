import React from "react";
import "./style.css";

class Card extends React.Component {


  clickedOn = () => {

    if (this.props.clicked) {
      this.props.reset();
    } else {
      this.props.updateClicked(this.props.index);
      this.props.shuffle();
      this.props.incScore();
      //console.log(this.props);
      
    }

  };

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img onClick={()=>this.clickedOn()} src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Card;
