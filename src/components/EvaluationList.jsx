import React from 'react';
import Evaluation from './Evaluation';
import NavBar from  './NavBar.jsx';
import evaluationSamples from  '../eval_data.js';
import {Segment} from 'semantic-ui-react'
class EvaluationList extends React.Component {
  render() {
    // eslint-disable-next-line
     const evaluations = evaluationSamples.sort((a, b) => (
      b.votes - a.votes
    ));
    const evaluationComponents = evaluationSamples.map((evaluation) => (
          <Evaluation
            key={'evaluation-' + evaluation.id}
            id={evaluation.id}
            team={evaluation.team}
            task={evaluation.task}
            attempt={evaluation.attempt}
            notes={evaluation.notes}
            time={evaluation.time}
            goalTime={evaluation.goalTime}
            gpsLong={evaluation.gpsLong}
            gpsLat={evaluation.gpsLat}    
            result={evaluation.result}  
            successPercentage={evaluation.successPercentage}        
          />
        ));
    return (
      <div>
       <NavBar />
      <Segment inverted>
             {evaluationComponents}
      </Segment>
      </div>
    );
  }
}
export default EvaluationList;
