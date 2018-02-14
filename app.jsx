var PLAYERS = [
  {
    id: 1,
    name: "Paul McCartney",
    score: 10,
  },
  {
    id: 2,
    name: "John Lennon",
    score: 10,
  },
  {
    id: 3,
    name: "Ringo Starr",
    score: 10,
  },
  {
    id: 4,
    name: "George Harrison",
    score: 10,
  },
]


// *********************
//    Header
// *********************

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}


// *********************
//    Player
// *********************

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter initialScore={props.score}/>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}


// *********************
//    Counter
// *********************

var Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired,
  },
  getInitialState: function(){
    return {
      score: this.props.initialScore,
    }
  },
  incrementScore: function() {
    this.setState({
      score: (this.state.score + 1),
    });
  },
  decrementScore: function() {
    this.setState({
      score: (this.state.score - 1),
    });
  },
  render: function(){
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>    
    )
  },
});


// *********************
//    Application
// *********************

function Application(props){
  return (
    <div className="scoreboard">
      <Header title={props.title}/>
      <div className="players">
        {props.players.map(function(player) {
          return <Player key={player.id} name={player.name} score={player.score}/>
        })}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired
}

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));