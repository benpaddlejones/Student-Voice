//Variables (Need to be kept in data)
$firsttime = 0;

//Start code here
$(document).ready(function(){
	$("#header").fadeIn(2000);
	if ($firsttime == 0) {
		$("#first-time-welcome").delay(2000).show("slide", {direction: "up"}, 1500);
			$("#close-button-first-time").click(function(){
			$("#first-time-welcome").hide("slide", {direction: "up"}, 1500);
			var firsttime = 1;
			$("#mainpage").delay(1500).fadeIn(1000);
		});
	} else {
		$firsttime = 1;
		$("#mainpage").delay(1000).fadeIn(1000);
	}
});