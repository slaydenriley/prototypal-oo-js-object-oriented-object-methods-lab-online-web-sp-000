function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
}

BoardMember.prototype veto() {
  returns "No, I must disagree"
}
