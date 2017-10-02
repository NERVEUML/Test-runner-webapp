import React from 'react';
import Configuration from './Configuration';
import NavBar from  './NavBar.jsx';
import configurationSamples from  '../sampleData/config_data';
import {Segment} from 'semantic-ui-react';


class ConfigurationList extends React.Component {
  render() {
    const configurationComponents = configurationSamples.map((configuration) => (
          <Configuration
            key={'configuration-' + configuration.id}
            id={configuration.id}
            name={configuration.name}
            airFrame={configuration.airFrame}
            motors={configuration.motors}
            rotors={configuration.rotors}
            flightController={configuration.flightController}
            battery={configuration.battery}
            weight={configuration.weight}
            height={configuration.height}
          />
        ));
    return (
      <div>
       <NavBar />
      <Segment inverted>
             {configurationComponents}
      </Segment>
      </div>
    );
  }
}
export default ConfigurationList;
