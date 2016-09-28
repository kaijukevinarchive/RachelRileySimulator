var GoalNumber = React.createClass({
  getInitialState: function() {
    return { goal: 0 }
  },

  getRandomGoal: function() {
    var newGoal = 100 + (Math.floor((Math.random() * (999 - 100))));
    this.setState({ goal: newGoal })
  },

  render: function() {
    return (
      <div className="goalNumber">
        <h1>{this.state.goal}</h1>
        <button onClick={this.getRandomGoal}>Go</button>
      </div>
    )
  }
});

var NumberCard = React.createClass({
  getInitialState: function(){
    return {
      cardNumbers: [],
      bigCards: [25, 50, 75, 100],
      smallCards: [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
    }
  },

  getBigNumber: function() {
    var cards = this.state.bigCards;
    var randomIndex = Math.floor(Math.random() * cards.length);
    var cardToAdd = this.state.bigCards[randomIndex];
    if (cardToAdd === undefined) {
      return;
    } else {
      this.setState({cardNumbers: this.state.cardNumbers.concat([cardToAdd])});
      cards.splice(randomIndex,1);
      this.setState({bigCards: cards})
    }
  },

  getSmallNumber: function() {
    var cards = this.state.smallCards;
    var randomIndex = Math.floor(Math.random() * cards.length);
    var cardToAdd = this.state.smallCards[randomIndex];
    if (cardToAdd === undefined || this.state.cardNumbers.length >= 6) {
      return;
    } else {
      this.setState({cardNumbers: this.state.cardNumbers.concat([cardToAdd])});
      cards.splice(randomIndex,1);
      this.setState({smallCards: cards})
    }
  },

  render: function() {
    var cards = this.state.cardNumbers;
    return (
      <div className="numberCards">
        <ul>
          {cards.map(function(number, index){
            return (<li>{number}</li>)
          })}
        </ul>
        <button onClick={this.getBigNumber}>big</button>
        <button onClick={this.getSmallNumber}>small</button>
      </div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return { goal: 0, }
  },
  render: function() {
    return (
      <div>
        <GoalNumber />
        <NumberCard />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));
