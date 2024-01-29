async function equipos(params) {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d010832d7msh701bc29d258dd79p1d3bf3jsnbdee7a34a9ac',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
    };
    try {
    	const response = await fetch(url, options);
    	const result = await response.text();
    	console.log(result);
        } catch (error) {
	        console.error(error);
        }
}
alert("Hola")
    document .getElementById('btnequipos').addEventListener('click', () => {
        console.log("click")
    })
/*  */
$(document).ready(function() {    

    $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
        $(".transition-timer-carousel-progress-bar", this)
            .removeClass("animate").css("width", "0%");
    }).on("slid.bs.carousel", function(event) {
        $(".transition-timer-carousel-progress-bar", this)
            .addClass("animate").css("width", "100%");
    });
    $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
        .css("width", "100%");
});