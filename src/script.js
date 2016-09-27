var GoalNumber = React.createClass({
  getInitialState: function() {
    return { goal: 0 }
  },

  getRandomGoal: function() {
    var newGoal = Math.floor((Math.random() * 999) + 100);
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
    return {cardNumbers: []}
  },

  getBigNumber: function() {
    var numbersArray = [10, 25, 50, 75, 100];
    var getIndex = Math.floor(Math.random() * numbersArray.length);
    var newNumberCard = numbersArray[getIndex];
    console.log(newNumberCard);
  },

  getSmallNumber: function() {
    var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
    var getIndex = Math.floor(Math.random() * numbersArray.length);
    var newNumberCard = numbersArray[getIndex];
    console.log(newNumberCard);
  },

  render: function() {
    return (
      <div>
        <button onClick={this.getBigNumber}>big</button>
        <button onClick={this.getSmallNumber}>small</button>
      </div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return { answer: 0 }
  },
  getAnswer: function(firstNumber, secondNumber) {
    var newAnswer = firstNumber + secondNumber;
    console.log(newAnswer);
    this.setState({answer: newAnswer})
  },
  getInitialState: function(){
    return {answer: 0}
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
