// FIREBASE 

var config = {
    apiKey: "AIzaSyCnd-58MkGLOlmvYfOjzVMyvJ6fb6DKEt0",
    authDomain: "wife-s-website.firebaseapp.com",
    databaseURL: "https://wife-s-website.firebaseio.com",
    projectId: "wife-s-website",
    storageBucket: "wife-s-website.appspot.com",
    messagingSenderId: "974693451710"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database(); 
  
  $("#submit").on("click", function (event) {
  
    event.preventDefault();
    var contactName = $("#name").val().trim();
    var contactEmail = $("#email").val().trim();
    var contactNumber = $("#phoneNumber").val().trim();
    var contactMessage = $("#message").val().trim();
  
  
    swal("Thank you!", "I'll get back with you shortly!", "success");
  
  
    var newContact = {
        name: contactName,
        email: contactEmail,
        telephone: contactNumber,
        message: contactMessage
    };
  
    database.ref().push(newContact);
    $("#name").val("");
    $("#email").val("");
    $("#phoneNumber").val("");
    $("#message").val("");
  
  });