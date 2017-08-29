
///BACK END
var count = 1
var contacts = [];

//intializes google maps
function initMap() {
  var meadows = {lat: 45.333067, lng: -121.655631};

  var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: meadows
  });
  var marker = new google.maps.Marker({
   position: meadows,
   map: map
  });
}

function Contact(first, last, weekend, number, carrier){
  this.firstName = first;
  this.lastName = last;
  this.weekend = weekend;
  this.number = number;
  this.carrier = carrier;
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
  var progress = count * (100/12)
  $(".updatedBar").html('<div class="progress">' +
  '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + progress + '%; height: 30px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>' +
  '</div>')
  if (count > 11){
    $(".updatedBar").html('<div class="progress">' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 100%; height: 30px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">FULL BUSS. LESSSSS GOOOOOO</div>' +
    '</div>')
    $("#fire").html('<div id="inALine"><p><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""></p></div>')
  }
  count ++
}
var phoneNumber = parseInt($("#phoneNumber").val());
var carrier;
var message;
var name;
var email = phoneNumber + carrier;
function sendMail() {
  window.location.href = 'mailto:' + email + '?subject=Ski Confirmation' + '&body=' + message;
}

/////FRONT END
$(document).ready(function() {
  $("#signUpForm").submit(function(event) {
    event.preventDefault();

    var firstNameInputted = $("#firstName").val();
    var lastNameInputted = $("#lastName").val();
    var weekendInputted = $("#weekendInput").val();
    var phoneNumber = parseInt($("#phoneNumber").val());
    var carrier = $("#carrier").val();
    var newContact = new Contact(firstNameInputted, lastNameInputted, weekendInputted, phoneNumber, carrier);
    alert(carrier)
    console.log(newContact);

    $(".new-address").each(function (){
      var streetInputted = $("#street").val();
      var cityInputted = $("#city").val();
      var stateInputted = $("#state").val();
      var newAddress = new Address(streetInputted, cityInputted, stateInputted);

      newContact.addresses.push(newAddress);
      contacts.push(newContact);

      message = "Your Ski Trip Has Been Confirmed";
      name = "Dan";
      email = phoneNumber + carrier;


      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      progressBar();
      resetFields();
      //sendMail();

    });

  });

});
