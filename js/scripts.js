
///BACK END

contacts = [];

function Contact(first, last, number){
  this.firstName = first;
  this.lastName = last;
  this.number = number;
  this.addresses = [];
}
function Address(street1, city1, state1){
  this.street = street1;
  this.city = city1;
  this.state = state1;
}
Contact.prototype.firstAndLast = function () {
  return this.firstName + " "+this.lastName;
}
Address.prototype.fullAddress = function () {
  return this.street+", " + this.city+ ", "+this.state;
}
function resetFields(){
  $("input#firstName").val("");
  $("input#lastName").val("");
  $("input.street").val("");
  $("input.city").val("");
  $("input.state").val("");
}
/////FRONT END
$(document).ready(function() {
  $("#signUpForm").submit(function(event) {
    event.preventDefault();

    var firstNameInputted = $("#firstName").val();
    var lastNameInputted = $("#lastName").val();
    var phoneNumberInputted = $("#phoneNumber").val();

    var newContact = new Contact(firstNameInputted, lastNameInputted, phoneNumberInputted);

    $(".new-address").each(function (){
      var streetInputted = $("#street").val();
      var cityInputted = $("#city").val();
      var stateInputted = $("#state").val();
      var newAddress = new Address(streetInputted, cityInputted, stateInputted);

      newContact.addresses.push(newAddress);
      contacts.push(newContact);

      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      resetFields();
      console.log(contacts)
      console.log(newContact);
    });
  });
});
