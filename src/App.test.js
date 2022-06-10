const app = require('./App.js')



// TESTING THE OPENWEATHERMAP API
// IF TEH API TEST GOES AS EXPECTED, THE APP WILL WORK PROPERLY
test('running weather api goes as expected', () => {
    expect(() => app()).toThrow();

});