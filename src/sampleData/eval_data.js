/* /sampleData/sample_data.js */

 //Example Data to use in testing of the application

    //TODO: Write a test to validate these JSON objects for future testing
    //TODO: Write functions to check format of data objects

 const evaluationSamples =
      [
        {
            id: 1,
            team: 'NERVE',
            task: '12-2',
            attempt: 2,
            notes: 'This is notes about each attempt about what the performer accomplished.',
            time: '5:30:22',
            goalTime: '2:40:33',
            gpsLong: 41.40338,
            gpsLat: 2.17403,
            result: 'Reach goal, but team take over',
            successPercentage: '75%',
            config: 'SpaceShip'
        },
        {
            id: 2,
            team: 'MIT',
            task: '12-3',
            attempt: 1,
            notes: 'Testing notes.',
            time: '1:20:52',
            goalTime: '3:40:00',
            gpsLong: 41.40338,
            gpsLat: 2.17403,
            result: 'crashed',
            successPercentage: '0%',
            config: 'SpaceShip'
        }
      ];
export default evaluationSamples;
