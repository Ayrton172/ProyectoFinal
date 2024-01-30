async function equipos(params) {
    const url = 'https://api.openligadb.de/getmatchdata/bl1/2020/1';
    const options = {
        method: 'GET',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
    document .getElementById('btnequipos').addEventListener('click', () => {
        equipos({});
    });
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