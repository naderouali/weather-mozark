const app = require('./App.js')




test('running weather api goes as expected', () => {
    expect(() => app()).toThrow();

});