
  	
  	$(document).ready(function() {	

  	  	var targetNumber = null;

  	var wins = 0;
  	
  	var losses = 0;
  	
  	var counter = 0;

  	var imageCrystal = 0;

  	var i = 0;
  	
  	var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  	var randomValue= function(){
  	return numberOptions[Math.floor(Math.random()*numberOptions.length)]}

  	console.log("randomValue:",randomValue());

  	$("crystals").empty();
  	
  	function startGame() {
  		targetNumber = Math.floor((Math.random() * 101) + 19);
  		counter = 0;
  		
  		console.log(targetNumber + "target Number");
  	$("#number-to-guess").text(targetNumber);

  }

  	for (var i = 0; i < 4; i++) {
  	
  		imageCrystal = $("<img>")
  			.addClass("crystal-image")
  			.attr("src", "http://naturalchakrahealing.com/images/rainbowquartzcrystals.png")
  			.attr("data-crystalvalue", randomValue());
  	
  		$("#crystals").append(imageCrystal);  	
  	}
  	
  	startGame();
  	
  	$("body").on("click", ".crystal-image", function() {
  	
  		var crystalValue = ($(this).attr("data-crystalvalue"));
  		crystalValue = parseInt(crystalValue);
  		console.log(crystalValue + "crystal value");
  		counter += crystalValue;
  		console.log(counter + "counter");
  		
  		$("#score").text(counter);
  	
  		console.log(counter);

  		if (counter === targetNumber) {
  	  
  	    wins++
  	    $("#wins").text(wins);
  	      alert("Dag nabbit you done won this puppy!");
  	      startGame();
  	  }
  	
  	  else if (counter >= targetNumber) {
  		
  		losses++
  		$("#losses").text(losses);
  	  	alert("Today ain't your day pardner, you lose");
  	  	startGame();
  	  	
  	  }
 		counter: 0;
 	});
  	  
  	})