import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cardArr from "./cardArr.json";



var originalCardArr = [];


cardArr.forEach(function (card) {

  card.clicked = false;

  originalCardArr.push(card);

});

class App extends Component {

  //add a clicked property to each card in the cardArr


  state = {
    cardArr,
    score: 0,
    topScore: 0
  };

  shuffle = () => {

    var cardArr = this.state.cardArr;

    //console.log('cardarr', cardArr);

    var tempArr = [];

    while (cardArr.length > 0) {

      var randomIndex = Math.floor(Math.random() * cardArr.length);

      var tempCard = cardArr.splice(randomIndex, 1);

      tempArr.push(tempCard[0]);

    }

    tempArr.forEach(function (card) {

      cardArr.push(card);


    });

    //this.setState({cardArr: cardArr});

  };

  incScore = () => {

    this.setState((prevState) => ({ score: this.state.score + 1 }));

    console.log(originalCardArr);


  };

  reset = () => {

    //console.log('cardarrBefore', cardArr);
    if (this.state.score > this.state.topScore) {

      this.setState((prevState)=>({topScore: this.state.score }));

    }
    //this.setState((prevState)=>({cardArr: originalCardArr, score: 0}));
    
    this.setState(prevState=>({score:0}));

    cardArr.splice(0, cardArr.length);

    originalCardArr.forEach(function(card){

      card.clicked = false;

      cardArr.push(card);

    });

    this.setState((prevState)=>({cardArr: cardArr}));
    //console.log('cardarr', cardArr);
    //console.log('original', originalCardArr);

  }

  updateClicked = (index) => {


    var cardArr = this.state.cardArr;
    // console.log('cardarr1', cardArr[0], cardArr[index], cardArr);
    // console.log('index', index);

    cardArr[index].clicked = true;
    //console.log(cardArr[index]);
    this.setState((prevState)=>({cardArr: cardArr}));

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game: Earn a point for clicking a picture once. Click a picture twice and start over!</Title>
        <div style={{ width: '100%' }}>Score:{this.state.score}<br></br>High Score:{this.state.topScore}</div>

        {this.state.cardArr.map((card, index) => (
          <Card
            key={index}
            index={index}
            shuffle={this.shuffle}
            incScore={this.incScore}
            reset={this.reset}
            image={card.image}
            clicked={card.clicked}
            updateClicked={this.updateClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
