/* /src/components/Eval_Parts/ResultForm.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container, Button} from 'semantic-ui-react';
import {
  Form,
  Text,
  Select,
  Textarea,
} from 'react-form';

class ResultForm extends Component {
  render() {
    return (
      
      <Container textAlign="center">
        <h1> Result Form </h1>
        <Form
          // Validating your form is super easy, just use the `validate` life-cycle method
          validate={values => {
            const {
              team,
              result,
              success
            } = values;
            return {
              team: !team ? 'A  team name is required' : undefined,
              result: !result ? 'A result is required' : undefined,
              success: !success ? 'A success is required' :undefined
            }
          }}
        
        > {({ values, submitForm, addValue, removeValue, getError }) => {
            // This is a stateless component, but you can use any valid react component to render your form.
            // Forms also supply plenty of useful props for your components to utilize. See the docs for a complete list.
            return (
              <form onSubmit={submitForm}>
                {' '}
                {/* When the form is submitted, call the `sumbitForm` callback prop */}
                <div>
                  <h3>Team</h3>
                  <Text // This is the built-in Text formInput
                    field="team" // field is a string version of the field location
                    placeholder="Nerve" // all other props are sent through to the underlying component, in this case an <input />
                  />
                </div>

                <div>
                  <h3>Result:</h3>
                  <Select // This is the built-in Select formInput
                    field="result"
                    options={[
                      {
                        // You can ship it some options like usual
                        label: 'Completion',
                        value: 'Complete'
                      },
                      {
                        label: 'Pilot Take over',
                        value: 'Pilot Take over'
                      },
                      {
                        label: "Saftey Take over",
                        value: 'saftey Take Over'
                      },
                      {
                        label: 'Vehicle Crashed',
                        value: 'Vehicle Crashed'
                      },
                      {
                        label: 'Vehicle Landed',
                        value: 'Vehicle Landed'
                      },
                    ]}
                  />
                </div>
                <div>
                  <h3>Success %:</h3>
                  <Select // This is the built-in Select formInput
                    field="status"
                    options={[
                      {
                        // You can ship it some options like usual
                        label: '0%',
                        value: '0'
                      },
                      {
                        label: '25%',
                        value: '25'
                      },
                      {
                        label: "75%",
                        value: '75'
                      },
                      {
                        label: "100%",
                        value: '100'
                      }

                    ]}
                  />
                </div>

                <div>
                  <h3>Notes</h3>
                  <Textarea // This is the built-in Textarea formInput
                    field="fieldNotes"
                    placeholder="Notes"
                  />
                </div>

                <br />
                <br />

                {/* // Since this is the parent form, let's put a submit button in there ;) */}
                {/* // You can submit your form however you want, as long as you call the `submitForm` callback */}
                <Button>
                  Submit
                </Button>
              </form>
            )
          }}

        </Form>
      </Container>
    );
  }
}

export default ResultForm;