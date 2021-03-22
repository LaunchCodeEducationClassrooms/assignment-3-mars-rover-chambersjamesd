class Rover {
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL'
     this.generatorWatts = 110
   }
   receiveMessage(message){
    this.message = message['name'];
    this.commands = message['commands'];
    this.results = {}
    return(this);
  }
}

module.exports = Rover, Rover.receiveMessage;