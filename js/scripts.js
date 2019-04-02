//bored on earth
function boredtodo() {

	var response = 'https://www.boredapi.com/api/activity';
	
	fetch(response)

	.then(function(response) {
		return response.json();
	})
	
	.then(function(response){

		var act = response.activity

		document.getElementById('activityString').innerHTML = act;
	})
}


//gifs
function generateGif() {
	var cors = 'https://cors-anywhere.herokuapp.com/'
	var url = 'https://api.giphy.com/v1/gifs/random';
	var api_key = 'AOfxhJlmevLTBimFBQdd5whTuChbhjte'
	var finalUrl = cors+url+'?api_key='  +api_key;
console.log(finalUrl);
	fetch(finalUrl)

	.then(function(response) {
		return response.json();
	})
	
	.then(function(response){

		var gif = response.data.image_url;
		console.log(response);

		document.getElementById('gif-image').src = gif;
	})
}