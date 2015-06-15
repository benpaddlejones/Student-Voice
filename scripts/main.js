//Variables (Need to be kept in data)
$firsttime = 0;

//Start code here
$(document).ready(function(){
	$("#header").fadeIn(2000);
	if ($firsttime == 0) {
		$("#first-time-welcome").delay(1000).show("slide", {direction: "up"}, 800);
			$("#first-time-close").click(function(){
			$("#first-time-welcome").hide("slide", {direction: "up"}, 800);
			$firsttime = 1;
			$("#mainpage").fadeIn(1000);
		});
	} else {
		$firsttime = 1;
		$("#mainpage").fadeIn(2000);
	}
});