/* /src/components/Configuration.jsx  */

//Libraries
import React from 'react';
import {Card, Label} from 'semantic-ui-react';
const Configuration = (props) => {
        return (
        <div className="configurations">
        <Card fluid >
          <Label >Name:</Label>{props.name}
          <Label>Air Frame:</Label>{props.airFrame}
          <Label> Motors:</Label>{props.motors} <br />
          <Label>Rotors:</Label>{props.rotors} <br />
          <Label> Flight Controller:</Label>{props.flightController} <br />
          <Label>Batter:</Label>{props.battery} <br />
          <Label>Weight:</Label>{props.weight} <br />
          <Label>Height:</Label>{props.height} <br />
      </Card>
    </div>
      );}

export default Configuration;
