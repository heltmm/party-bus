
///BACK END

contacts = [];

function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
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
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}
/////FRONT END
$(document).ready(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    $(".added").remove();

    var firstNameInputted = $("#new-first-name").val();
    var lastNameInputted = $("#new-last-name").val();

    var newContact = new Contact(firstNameInputted, lastNameInputted);


    $(".new-address").each(function (){
      var streetInputted = $(this).find(".new-street").val();
      var cityInputted = $(this).find(".new-city").val();
      var stateInputted = $(this).find(".new-state").val();
      var newAddress = new Address(streetInputted, cityInputted, stateInputted);
      newContact.addresses.push(newAddress);
    });
    // contacts.push(newContact)
    // localStorage.setItem(contacts);
    // console.log(contacts)

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstAndLast() + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("#addresses").text("");
        newContact.addresses.forEach(function(address){
          $("#addresses").append("<li>" + address.fullAddress()+ "</li>" );
        });
    });
    resetFields();

  });
});
