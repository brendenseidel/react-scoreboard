
// 1. React Component
function Application(){
  return (
    <div>
      <h1>Hello from React</h1>
      <p>I was rendered from the application component!</p>
    </div>
  );
}

ReactDOM.render(<Application/>, document.getElementById('container'));




//************************/
// 2. Before Decomposition
//************************/

// React Component
function Application(props){
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">31</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">31</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">31</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
}

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<Application />, document.getElementById('container'));



//**********************/
//**********************/
// 3. After Decomposition
//**********************/
//**********************/


var PLAYERS = [
  {
    id: 1,
    name: "Paul McCartney",
    score: 432
  },
  {
    id: 2,
    name: "John Lennon",
    score: 654
  },
  {
    id: 3,
    name: "Ringo Starr",
    score: 234
  },
  {
    id: 4,
    name: "George Harrison",
    score: 876
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
        <Counter score={props.score}/>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}


// *********************
//    Counter
// *********************

function Counter(props) {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.PropTypes = {
  score: React.PropTypes.number.isRequired,
}


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