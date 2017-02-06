(function() {
	var webPage = document.querySelector('#body'),
		homeButton = document.querySelector('#home'),
		teamButton = document.querySelector('#team'),
		aboutButton = document.querySelector('#about');

		function aquireJson(url) {
			httpRequest = new XMLHttpRequest();

			if(!httpRequest) {
				alert('Error. Browser is too old.');
				return false;
			}

			httpRequest.onreadystatechange = displayPage;
			httpRequest.open('GET', url);
			httpRequest.send();
		}

		function displayPage() {
			if(httpRequest.readyState === XMLHttpRequest.DONE) {
				if(httpRequest.status === 200) {
					var response = httpRequest.responseText;
					webPage.innerHTML = response;
				}else{
					console.log('There was a problem with your request.');
				}
			}
		}

		homeButton.addEventListener('click', function() { aquireJson('index.html') }, false);
		teamButton.addEventListener('click', function() { aquireJson('team.html') }, false);
		aboutButton.addEventListener('click', function() { aquireJson('about.html') }, false);

})()();

/*function TalkDogAnimation(){
var TalkDog_animation_time = new TimelineLite();
TweenMax.staggerTo(".TalkDog_animation_one", 1, {opacity:0}, 1),
TweenMax.staggerTo(".TalkDog_animation_one", 1, {opacity:50}, 1),
TweenMax.staggerTo(".TalkDog_animation_one", 1, {opacity:100}, 1);
}*/