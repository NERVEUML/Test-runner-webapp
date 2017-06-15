/* /src/components/Evaluation.jsx  */

//Libraries
import React, { Component } from 'react';

class EvaluationForm extends Component {

  render() {

    return (
  <div className="Evaluation">
    <div className="Eval-title">
        <p> Team: {this.props.team} </p> <p> Slot: {this.props.slot} </p>
     </div>
    <div className="Eval-data">
        <p> Attempt: {this.props.attempts}</p>
        <p> Notes: {this.props.notes}</p> 
        <p> Time: {this.props.time}</p>
        <p> Goal Time: {this.props.goal_time}</p>
        <p> GPS: {this.props.coords}</p>
        <p> Result: {this.props.result}</p>
        <p> Success Percentage: {this.props.success_percent}</p>
        <button class="moreButton"> 
            <img src ="../media/assets/more.png" alt="detail" />
        </button>
    </div>
   


  </div>
    );
  }
}

export default EvaluationForm;