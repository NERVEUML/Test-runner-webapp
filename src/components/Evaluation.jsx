/* /src/components/Evaluation.jsx  */

//Libraries
import React from 'react';
import {Card, Statistic, Segment, Label} from 'semantic-ui-react';
const Evaluation = (props) => {
        return (
        <div className="evaluations">
        <Card fluid >
          <Label>Team:</Label>{props.team}
          <Label>Task:</Label>{props.task}
          <Label>Attempt:</Label>{props.attempt}
          <Label>Notes:</Label>{props.notes} <br />
          <Label>Result:</Label>{props.result} <br />
             <Segment>
              <Statistic  color='blue'>
                <Statistic.Value>{props.time}</Statistic.Value>
                <Statistic.Label >Time</Statistic.Label>
              </Statistic>
              <Statistic color='blue'>
                <Statistic.Value>{props.goalTime}</Statistic.Value>
                <Statistic.Label>Goal Time</Statistic.Label>
              </Statistic>
              <Statistic color='blue'>
                <Statistic.Value>{props.gpsLong}</Statistic.Value>
                <Statistic.Label>GPS Longitude</Statistic.Label>
              </Statistic>
               <Statistic color='blue'>
                <Statistic.Value>{props.gpsLat}</Statistic.Value>
                <Statistic.Label>GPS Latitude</Statistic.Label>
              </Statistic >
              <Statistic color='blue'>
                <Statistic.Value>{props.successPercentage}</Statistic.Value>
                <Statistic.Label>Success Percentage</Statistic.Label>
              </Statistic>
             </Segment>
      </Card>
    </div>
      );}

export default Evaluation;
