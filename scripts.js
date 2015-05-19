var exercises = ['Jumping jacks', 'Wall sit', 'Push-up', 'Abdominal crunch', 
				'Step-up onto chair', 'Squat', 'Triceps dip on chair', 'Plank', 
				'High knees running in place', 'Lunge', 'Push-up and rotation', 'Side plank'];
var globalCounter = 1;
var powerUpAudio = new Audio("sounds/SFX_Powerup_01.wav");

function id(el) {
	return document.getElementById(el);
}

function init() {
	id('begin-button').style.display = 'none';
	id('exercise').style.display = 'block';
	id('bar').style.display = 'block';
	exerciseCountDown();
}

function progressBar() {
	id('progress').style.width = (globalCounter * 8.4) + "%";
	powerUpAudio.play();
}

function exerciseCountDown() {
	if(globalCounter < 12) {
		id('exercise').style.display = 'block';
		id('rest').style.display = 'none';
		var counter =  id('exercise').getElementsByClassName('counter')[0];
		var title = id('exercise').getElementsByClassName('title')[0];
		title.innerHTML = exercises[globalCounter - 1];
		counter.innerHTML = 30;
		var counterValue = counter.innerHTML;
		console.log(counter);
		var countDown = setInterval(function() {
			counterValue--;
			counter.innerHTML = counterValue;
			console.log(counter);
			if(counterValue==0) {
				clearInterval(countDown);
				progressBar();
				restCountDown();
			}
		}, 1000);		
	}
}

function restCountDown() {
	id('exercise').style.display = 'none';
	id('rest').style.display = 'block';
	var counter =  id('rest').getElementsByClassName('counter')[0]
	counter.innerHTML = 10;
	var counterValue = counter.innerHTML;
	console.log(counter);
	var countDown = setInterval(function() {
		counterValue--;
		counter.innerHTML = counterValue;
		console.log(counter);
		if(counterValue==0) {
			clearInterval(countDown);
			globalCounter++;
			exerciseCountDown();
		}
	}, 1000);
}