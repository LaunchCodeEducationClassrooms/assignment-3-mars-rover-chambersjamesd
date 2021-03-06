const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts",
  function () {
    let rover = new Rover(1234);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
  })

  it("response returned by receiveMessage contains name of message", function () {
    let rover = new Rover(1234);
    let message = new Message('Test Message');
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('Test Message');
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let rover = new Rover(1234);
    let commands = ['command 1', 'command 2'];
    let message = new Message('Test Message', commands);
    let response = rover.receiveMessage(message);
    expect(response.commands).toEqual(commands);
  });

  it("responds correctly to status check command", function () {
    
  });

});
