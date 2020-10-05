if (document.getElementById("mediaPlayer").classList.contains("withHLS") == true) {
	document.getElementById("durSlider").disabled = true;
	var hls = new Hls();
	hls.attachMedia(document.getElementById("mediaPlayer"));
	hls.loadSource(document.getElementById("mediaPlayer").dataset.streamurl);
}
if (document.getElementById("mediaPlayer").classList.contains("withMP3Stream") == true) {
	document.getElementById("durSlider").disabled = true;
}

jQuery(".playPause").on("click", function() {
	if (document.getElementById("mediaPlayer").paused) {
		document.getElementById("mediaPlayer").play();
		jQuery(".playPause").removeClass("fa-play").addClass("fa-pause");
	} else {
		document.getElementById("mediaPlayer").pause();
		jQuery(".playPause").removeClass("fa-pause").addClass("fa-play");
	}
});

function aggiornaSlider() {
	var arrotondaSecondi = Math.round(document.getElementById("mediaPlayer").currentTime);
	document.getElementById("durSlider").value = arrotondaSecondi;
	document.getElementById("currentTime").innerHTML = convertiTempo(arrotondaSecondi);
}

aggiornaSlider();
setInterval(aggiornaSlider, 1000);

function convertiTempo(secondi) {
	var minuto = Math.floor(secondi/60);
	var secondo = secondi % 60;
	minuto = (minuto < 10) ? "0" + minuto : minuto;
	secondo = (secondo < 10) ? "0" + secondo : secondo;
	return (minuto + ":" + secondo);
}

setInterval(()=>{document.getElementById("duration").innerHTML = convertiTempo(Math.round(document.getElementById("mediaPlayer").duration)); document.getElementById("durSlider").max=Math.round(document.getElementById("mediaPlayer").duration)}, 250);

function cambiaValoreDurationSlider() {
	document.getElementById("mediaPlayer").currentTime = document.getElementById("durSlider").value;
	document.getElementById("currentTime").innerHTML = convertiTempo(document.getElementById("mediaPlayer").currentTime);
}

jQuery("#durSlider").on("change", cambiaValoreDurationSlider);
