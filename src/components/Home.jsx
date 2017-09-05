/* /src/components/Home.jsx  */

//Libraries
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Container, Button} from 'semantic-ui-react';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';
import TeamList from './TeamList';


const Home = props => (
      <div className="Main-container">

        <NavBar />
        <Container textAlign='center'>
          <Button  color='red' onClick={() => props.changePage()}>Make Config</Button>
          <TeamForm onSubmit={this.onSubmit} />
          <TeamList />
        </Container>

      </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/ConfigurationForm')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
