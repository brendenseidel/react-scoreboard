var PLAYERS = [
  {
    id: 1,
    name: "Paul McCartney",
  },
  {
    id: 2,
    name: "John Lennon",
  },
  {
    id: 3,
    name: "Ringo Starr",
  },
  {
    id: 4,
    name: "George Harrison",
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
        <Counter />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
}


// *********************
//    Counter
// *********************

var Counter = React.createClass({
  propTypes: {},
  render: function(){
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment"> + </button>
      </div>    
    )
  },
  getInitialState: function(){
    return {
      score: 0,
    }
  }
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
          return <Player key={player.id} name={player.name}/>
        })}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  })).isRequired
}

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));