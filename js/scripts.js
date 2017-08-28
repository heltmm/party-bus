
///BACK END
var bar = 0
var contacts = [];

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
  $("input#phoneNumber").val("");
  $("input#street").val("");
  $("input#city").val("");
  $("input#state").val("");
}
function progressBar(){
  $(".updatedBar").html('<div class="progress">' +
  '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + bar + '%; height: 30px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>' +
  '</div>')
  if (bar > 99){
    $(".updatedBar").html('<div class="progress">' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 100%; height: 30px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">FULL BUSS. LESSSSS GOOOOOO</div>' +
    '</div>')
    $(".fire").show();
  }
  bar += (100/12)
}

/////FRONT END
$(document).ready(function() {

  $("#signUpForm").submit(function(event) {
    event.preventDefault();

    var firstNameInputted = $("#firstName").val();
    var lastNameInputted = $("#lastName").val();
    var phoneNumberInputted = $("#phoneNumber").val();
    var weekendInputted = $("#weekendInput").val();


    var newContact = new Contact(firstNameInputted, lastNameInputted, phoneNumberInputted);

    $(".new-address").each(function (){
      var streetInputted = $("#street").val();
      var cityInputted = $("#city").val();
      var stateInputted = $("#state").val();
      var newAddress = new Address(streetInputted, cityInputted, stateInputted);

      newContact.addresses.push(newAddress);
      contacts.push(newContact);





      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      progressBar();
      resetFields();
      console.log(contacts)
    });
  });

});
