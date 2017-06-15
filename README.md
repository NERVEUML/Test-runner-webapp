[logo]: https://github.com/NERVEUML/Test-runner-webapp/tree/master/src/media/assets "Test Runner Web app"

This app is created to make a web application be cross platform. The application is responsible for having a way to evaluation individual run on an obstacle course for robots. This app not only saves them in a concise way on the local device but also gives you the options to export them to Google Drive for backups and hard copy of the data.

## Getting Started

In order to see this app run locally on your machine simply
 
``` $ git clone  git@github.com:NERVEUML/Test-runner-webapp.git ```

### Prerequisites

[node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

### Installing

Enter the newly cloned directory and start the process of installing all packages and dependencies.

``` $ npm install ```

Then run on [localhost on port 300](http://localhost:300)

``` $ npm start ```

Open Browser and you should see the app.

## Running the tests

 I am using  Jest framework made by Facebook along with the Enzyme library to control my automated tests.

 Run Tests by 
``` $ npm test ```
//To run continuously
``` $ jest --watch ```

### Break down into end to end tests

My Testing Rules
* Created a test File or new Test Sweet for each component
* When Creating a new component use the enzyme library from airbnb to render 
    ``` import { shallow } from 'enzyme'  ```
   * Shallow rendering is useful to constrain yourself to testing a component as a unit, and ensure that your test aren't inserting behavior on the child components.

### And coding style tests

Using Stylus 

## Deployment

TBD: Could be setup to be hosted on Raspberry Pi or local desktop with public address.

## Built With

* [React](https://facebook.github.io/react/) - Front-End web framework used
* [Redux](http://redux.js.org/) - Data Management for localStorage and React State
* [Jest](https://facebook.github.io/jest/) - Used for large scale testing 
* [Enzyme](http://airbnb.io/enzyme/) - Used Test render components
* [Stylus](http://stylus-lang.com/) - Used for Styling




## Authors

* **Joseph Meli** - *Initial work* - [JosephMeli](https://github.com/JosephMeli)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
TBD
