///BACK END

var count = 1;

var contacts = [];

//intializes google maps
var marker;
function initMap() {
  var meadows = {lat: 45.333067, lng: -121.655631};

  var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: meadows
  });
  var image = 'http://images.goodsam.com/goodsam.com/icon/campground/icon-big-rigs.png';
    marker = new google.maps.Marker({
    position: meadows,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: image,
  });
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
// contact object paramaters
function Contact(first, last, weekend, number, carrier, activity, gender){
  this.firstName = first;
  this.lastName = last;
  this.weekend = weekend;
  this.number = number;
  this.carrier = carrier;
  this.activity = activity;
  this.gender = gender;

}

Contact.prototype.firstAndLast = function () {
  return this.firstName + " "+this.lastName;
};

Contact.prototype.guestPrint = function () {
var emoji;
  console.log(this.gender)
  switch(this.gender) {
    case "male":
      emoji = '<img src="images/manpage.png" alt="person emji"><br>'
      break;
    case "female":
      emoji = '<img src="images/womanpage.png" alt="person emji"><br>'
      break;
    case "undefined":
      emoji = '<img src="images/unisex.png" alt="person emji"><br>'
      break;
  }
  console.log(emoji);
  return emoji + this.firstName + " "+this.lastName + "<br><ul><li>" + this.weekend +"</li><li>" + this.activity + "</li></ul>";
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
  var progress = count * (100/12);
  $(".updatedBar").html('<div class="progress">' +

  '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + progress + '%; height: 30px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>' +
  '</div>');
  if (count > 11){
    $(".updatedBar").html('<div class="progress">' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 100%; height: 30px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">FULL BUSS. LESSSSS GOOOOOO</div>' +
    '</div>')
    $("#fire").html('<div id="inALine"><p><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""><img src="img/fire.png" alt=""></p></div>')
  }
  count ++;
}
var phoneNumber;
var carrier;
var message;

var email = phoneNumber + carrier;

function sendMail() {
  window.location.href = 'mailto:' + email + '?subject=Ski Confirmation' + '&body=' + message;
}
function weekendDisplay(weekendInputted){
  if (weekendInputted === "11/22") {
    $("#trip-info h3").text("Mt Hood - November 22 - November 24");
    $("#trip-info p").text("We are hitting Mt Hood on November 22nd. Tag along for a great time.");
    $("#trip-info").show();
  } else if (weekendInputted === "12/12") {
    $("#trip-info h3").text("Mt Hood - December 12 - December 14");
    $("#trip-info p").text("We are hitting Mt Hood on November 22nd. Tag along for a great time.");
    $("#trip-info").show();
  } else if (weekendInputted === "1/4") {
    $("#trip-info h3").text("Mt Hood - January 1 - January 3");
    $("#trip-info p").text("We are hitting Mt Hood on November 22nd. Tag along for a great time.");
    $("#trip-info").show();
  } else if (weekendInputted === "1/22") {
    $("#trip-info h3").text("Mt Hood - January 22 - January 24");
    $("#trip-info p").text("We are hitting Mt Hood on November 22nd. Tag along for a great time.");
    $("#trip-info").show();
  } return;
}

/////FRONT END
$(document).ready(function() {
  $('.carousel').carousel({
      interval: 2500
    });

  $("#signUpForm").submit(function(event) {
    event.preventDefault();
    if(count <= 12){
      var firstNameInputted = $("#firstName").val();
      var lastNameInputted = $("#lastName").val();
      var weekendInputted = $("#weekendInput").val();
      var phoneNumber = parseInt($("#phoneNumber").val());
      var carrier = $("#carrier").val();
      var activityInputted = $("#activity").val();
      var gender = $("input:radio[name=gender]:checked").val();

      var newContact = new Contact(firstNameInputted, lastNameInputted, weekendInputted, phoneNumber, carrier, activityInputted, gender);
      console.log(newContact)



      console.log(gender)

      var cityInputted = $("#city").val();
      var stateInputted = $("#state").val();



        contacts.push(newContact);

        var message = firstNameInputted + " your Ski Trip Has Been Confirmed";

        email = phoneNumber + carrier;
        $("#guest" + count).append("<div class='well'>"+ newContact.guestPrint() + "</div>")

        progressBar();
        resetFields();
        //sendMail();


      }else if(count > 12){
      alert("Bus Is Full!");
    }
  });
  $("#weekendInput").change(function(){

    var weekendInputted = $("#weekendInput").val();
    weekendDisplay(weekendInputted);
  });

});
