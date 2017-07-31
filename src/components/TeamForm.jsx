import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const TeamForm = (props) => {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Team</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                     <Form.Field>
                         <label>Task</label>
                         <input placeholder='Last Name' />
                    </Form.Field>
                    <Button onSubmit={props.onSubmit()} type='submit'>Submit</Button>
                 </Form>
            </div>
        );
}

export default TeamForm;
