if (document.getElementById("mediaPlayer").classList.contains("withHLS") == true) {
	var hls = new Hls();
	hls.attachMedia(document.getElementById("mediaPlayer"));
	hls.loadSource(document.getElementById("mediaPlayer").dataset.streamurl);
}
if (document.getElementById("mediaPlayer").classList.contains("withHLSStream") == true) {
        document.getElementById("durSlider").disabled = true;
        var hls = new Hls();
	hls.attachMedia(document.getElementById("mediaPlayer"));
	hls.loadSource(document.getElementById("mediaPlayer").dataset.streamurl);
}
if (document.getElementById("mediaPlayer").classList.contains("withDASH") == true) {
        (()=>{
		var player=dashjs.MediaPlayer().create();
		player.initialize(document.getElementById("mediaPlayer"), document.getElementById("mediaPlayer").dataset.streamurl, true);
	});
}
if (document.getElementById("mediaPlayer").classList.contains("withDASHStream") == true) {
        document.getElementById("durSlider").disabled = true;
        (()=>{
		var player=dashjs.MediaPlayer().create();
		player.initialize(document.getElementById("mediaPlayer"), document.getElementById("mediaPlayer").dataset.streamurl, true);
	});
}
if (document.getElementById("mediaPlayer").classList.contains("withMP3Stream") == true) {
	document.getElementById("durSlider").disabled = true;
}

document.querySelector(".playPause").addEventListener("click", function() {
	if (document.getElementById("mediaPlayer").paused) {
		document.getElementById("mediaPlayer").play();
		document.querySelector(".playPause").classList.remove("fa-play");
		document.querySelector(".playPause").classList.add("fa-pause");
	} else {
		document.getElementById("mediaPlayer").pause();
		document.querySelector(".playPause").classList.remove("fa-pause");
		document.querySelector(".playPause").classList.add("fa-play");
	}
});

document.querySelector("#durSlider").addEventListener("change", function() {
	if (document.getElementById("mediaPlayer").paused) {
		document.getElementById("mediaPlayer").play();
		document.querySelector(".playPause").classList.remove("fa-play");
		document.querySelector(".playPause").classList.add("fa-pause");
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

document.querySelector("#durSlider").addEventListener("change", cambiaValoreDurationSlider);
