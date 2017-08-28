
///BACK END
function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(type1, street1, city1, state1){
  this.type = type1;
  this.street = street1;
  this.city = city1;
  this.state = state1;
}
Contact.prototype.firstAndLast = function () {
  return this.firstName + " "+this.lastName;
}
Address.prototype.fullAddress = function () {
  return this.type + ", "+this.street+", " + this.city+ ", "+this.state;
}
function resetFields(){
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-type").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}
