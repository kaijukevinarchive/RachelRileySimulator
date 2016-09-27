var Answer = React.createClass( {
  render: function() {
    return (
      <p>{this.props.answer}</p>
    )
  }
});

var Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.numberHandler(parseInt(this.refs.firstNumber.value), parseInt(this.refs.secondNumber.value));
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" ref="firstNumber" />
        <input type="number" ref="secondNumber" />
        <button>Find Answer</button>
      </form>
    )
  }
});

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

var Main = React.createClass({
  getInitialState: function() {
    return { answer: 0}
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
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));
