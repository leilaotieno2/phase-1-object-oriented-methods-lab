// Constructor function for BoardMember
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // Methods for BoardMember
  BoardMember.prototype = {
    veto: function() {
      return "No, I must disagree";
    },
    approve: function() {
      return "You can do that!";
    },
    doCharity: function() {
      return "I like to help people.";
    },
    releasePressStatement: function() {
      return "You will see great things from Scuber.";
    },
    sayHi: function() {
      return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
    }
  };
  
  // Example usage:
  const member = new BoardMember("John Doe", "California", "Law");
  console.log(member.sayHi()); // prints "Hi, my name is John Doe. I am from California, and I was trained in Law."
  console.log(member.approve()); // prints "You can do that!"
  