/* /src/components/Eval_Parts/Stopwatch.jsx  */

//Libraries
import React from 'react';
import { Button, Container } from 'semantic-ui-react';


const leftPad = (width, n) => {
  if ((n + '').length > width) {
	  return n;
  }
  const padding = new Array(width).join('0');
  return (padding + n).slice(-width);
};

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    
    ["goal", "update", "reset", "toggle"].forEach((method) => {
    	this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      goalTimes: [],
      timeElapsed: 0,
    };
  }

  //Checks if the clock was started
  // this.state.isRunning == true then clearInterval
  // this.state.isRunning == false then call startTimer
  toggle() {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
//Assigns the "lap or goal"
  goal() {
    const {goalTimes, timeElapsed} = this.state;
    this.setState({goalTimes: goalTimes.concat(timeElapsed)});
  }
  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  render() {
    const {isRunning, goalTimes, timeElapsed} = this.state;
    return (
      <Container textAlign ='center'>
      <h1> Stopwatch </h1>
        <TimeElapsed id="timer" timeElapsed={timeElapsed} />
        <Button onClick={this.toggle}>
          {isRunning ? 'Run Complete' : 'Run Start'}
        </Button>
        <Button
          onClick={isRunning ? this.goal : this.reset}
          disabled={!isRunning && !timeElapsed}
         >
          {isRunning || !timeElapsed ? 'Goal Reached' : 'Reset'}
        </Button>
        {goalTimes.length > 0 && <GoalTimes goalTimes={goalTimes} />}
      </Container>
    );
  }
}

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id={this.props.id}>
        <span>{leftPad(2, units.min)}:</span>
        <span>{leftPad(2, units.sec)}.</span>
        <span>{units.msec}</span>
      </div>
    );
  }
}

class GoalTimes extends React.Component {
  render() {
    const rows = this.props.goalTimes.map((goalTime, index) =>
      <tr key={++index}>
        <td>{index}</td>
        <td><TimeElapsed timeElapsed={goalTime} /></td>
      </tr>
    );
    return (
      <table id="Goal-times">
        <thead>
          <th>Goal Reached</th>
          <th>Time</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Stopwatch;
