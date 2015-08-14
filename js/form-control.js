$(document).ready(function(){
	// Initialize collapse button
	$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  	);

    //Global variables
	var saveisChecked = 0;
	var fNameStorage = 0;
	var lNameStorage = 0;
	var emailStorage = 0;
	var schoolStorage = 0;
	var isthereData = 0;

    //Get and Write Storage Data
	getDataWriteData();


    //Reset form after Submit
	function partialReset() {
	    isthereData = window.localStorage.getItem("isthereData");
	    $('textarea').val('');
	    $('input').val('');
	    $('input:checkbox').removeAttr('checked');
	    $("input").blur();
	    $("textarea").blur();
        getDataWriteData();

	};

    //Clear Storage Function
	function deleteinformation() {
	    isthereData = window.localStorage.getItem("isthereData");
	    if (isthereData == 1) {
	        //Remove all Items from Storage
	        window.localStorage.removeItem("isthereData");
	        window.localStorage.removeItem("fName");
	        window.localStorage.removeItem("lName");
	        window.localStorage.removeItem("email");
	        window.localStorage.removeItem("school");

	        //Remove Text Value from Input Boxes
	        $('input[name="firstNameInput"]').val("");
	        $('input[name="lastNameInput"]').val("");
	        $('input[name="emailInput"]').val("");
	        $('input[name="schoolInput"]').val("");
	        //Remove Focus so Inputs are Back to Normal
	        $("input").blur();
	        $("textarea").blur();
	    };
	};

    //Check if there is data, if not the command will end.
	function getDataWriteData() {
	    isthereData = window.localStorage.getItem("isthereData");
	    if (isthereData == 1) {

	        //Get Data from Storage
	        var firstNamefromStorage = window.localStorage.getItem("fName");
	        var lastNamefromStorage = window.localStorage.getItem("lName");
	        var emailfromStorage = window.localStorage.getItem("email");
	        var schoolfromStorage = window.localStorage.getItem("school");

	        //Input Data into Value of Input
	        $('input[name="firstNameInput"]').val(firstNamefromStorage);
	        $('input[name="lastNameInput"]').val(lastNamefromStorage);
	        $('input[name="emailInput"]').val(emailfromStorage);
	        $('input[name="schoolInput"]').val(schoolfromStorage);

            //Add Focus so Text Doesn't Overlap
	        $('input[name="firstNameInput"]').focus();
	        $('input[name="lastNameInput"]').focus();
	        $('input[name="emailInput"]').focus();
	        $('input[name="schoolInput"]').focus();
	    };
	};

    //EVENT LISTENERS
    //Trigger change of variable if saveinfo is checked
	$('#saveinfo').change(function () {
	    saveisChecked = 1;
	});

    //Check if the user wants to save data, if so, save it when submitting the form.
	$('#submitButton').click(function () {
	    if (saveisChecked == 1) {
	        window.localStorage.setItem("isthereData", 1);

	        //Get value data from Inputs
	        fNameStorage = $('input[name="firstNameInput"]').val();
	        lNameStorage = $('input[name="lastNameInput"]').val();
	        emailStorage = $('input[name="emailInput"]').val();
	        schoolStorage = $('input[name="schoolInput"]').val();

	        //Save Value data into Storage
	        window.localStorage.setItem("fName", fNameStorage);
	        window.localStorage.setItem("lName", lNameStorage);
	        window.localStorage.setItem("email", emailStorage);
	        window.localStorage.setItem("school", schoolStorage);
	    };
	    sendEmail();
	    partialReset();
	});

    //Run Clear Storage Function on click of button
	$('#clearinfo').click(function () {
	    deleteinformation();
	});

    //End Code for Form Storage
});

//Initialize the email plugin
document.addEventListener('deviceready', function () {
    // cordova.plugins.email is now available
}, false);

cordova.plugins.email.isAvailable(
    function (isAvailable) {
        // alert('Service is not available') unless isAvailable;
    }
);
//Variables for Input Values
var firstName = 0;
var lastName = 0;
var email = 0;
var message = 0;
var toSchool = 0;


//Send Email Function
function sendEmail() {
    //Pull Data from Input
    firstName = $('input[name="firstNameInput"]').val();
    lastName = $('input[name="lastNameInput"]').val();
    email = $('input[name="emailInput"]').val();
    message = $('textarea[name="messagetoDepartment"]').val();

    //Send Email
    alert('Are you sure you want to send this email?');
    cordova.plugins.email.open({
        app: 'gmail',
        to: toSchool,
        cc: '',
        bcc: ['halfbeardstudios@gmail.com',email],
        subject: 'Student-Voice email from: ' + firstName + ' ' + lastName,
        body: message
    });
};

