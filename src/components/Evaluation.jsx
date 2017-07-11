/* /src/components/Evaluation.jsx  */

//Libraries
import React from 'react';
import {Card, Statistic, Segment, Header, Label} from 'semantic-ui-react';
const Evaluation = (props) => {
        return (
        <Card fluid >
        <Header>Team: {props.team}</Header>
    
        <div className='middle aligned content'>
          <div className='header'>
           Task:{props.task}
          </div>
          <div className='description'>
              <Label>Attempt:</Label>{props.attempt} 
            <p>
             <Label> Notes:</Label>{props.notes} <br />
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
            </p>
          </div>
        </div>
      </Card>
      );}

export default Evaluation;
