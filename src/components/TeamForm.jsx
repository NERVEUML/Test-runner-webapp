import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const TeamForm = (props) => {
        return (
            <div className='TeamForm'>
                <Form onSubmit={props.onSubmit}>
                  <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Team</label>
                        <input onChange={props.onTChange} placeholder='First Name' />
                    </Form.Field>
                     <Form.Field>
                         <label>Task</label>
                         <input onChange={props.onAChange} placeholder='Last Name' />
                    </Form.Field>
                    <Button>Submit</Button>
                  </Form.Group>

                 </Form>
            </div>
        );
}

export default TeamForm;
