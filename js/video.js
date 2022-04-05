var video=document.querySelector('video');
var playButton=document.querySelector('#play');
var pauseButton=document.querySelector('#pause');
var slowerButton=document.querySelector('#slower');
var fasterButton=document.querySelector('#faster');
var skipButton=document.querySelector('#skip');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;

});

playButton.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});
pauseButton.addEventListener("click",function(){
	console.log("Pause Video");
	video.pause();
})
slowerButton.addEventListener("click",function(){
	video.playbackRate*=0.95
	console.log("New speed is ",video.playbackRate);
})
fasterButton.addEventListener("click",function(){
	video.playbackRate*=1/0.95;
	console.log("New speed is ",video.playbackRate);
})
skipButton.addEventListener("click",function(){
	console.log("Original location ",video.currentTime);
	video.currentTime=(video.currentTime+15)%(video.duration);
	console.log("New location ",video.currentTime)
})

document.querySelector('#mute').addEventListener("click",function(e){
	video.muted=!video.muted;
	e.currentTarget.innerHTML=(video.muted?'Unmute':'Mute');
})

document.querySelector('#volume').innerHTML=document.querySelector('#slider').value+"%";

document.querySelector('#slider').addEventListener("click",function(e){
	// console.log(video.volume);
	video.volume=e.currentTarget.value/100;
	document.querySelector('#volume').innerHTML=video.volume*100+"%";
})
document.querySelector("#vintage").addEventListener("click",function(){
	if(video.classList.contains("oldSchool")==false){
		video.classList.add("oldSchool");
	}
})
document.querySelector("#orig").addEventListener("click",function(){
	if(video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool");
	}
})