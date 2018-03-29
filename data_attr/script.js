var rockets, distance, speed, altitude;

function activateRockets(){
	rockets = document.querySelectorAll('.rockets');
	for(var i=0; i<rockets.length; i++){
		altitude = rockets[i].dataset.altitude;
		speed = rockets[i].dataset.speed;
		distance = rockets[i].dataset.rocketDistance;
		rockets[i].style.top = altitude + "px";
		rockets[i].style.transitionDuration = speed + "s";
		rockets[i].style.left = distance + "px";
	}
}
window.addEventListener('load', activateRockets);
