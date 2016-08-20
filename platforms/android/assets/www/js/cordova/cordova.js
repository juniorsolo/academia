document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log(navigator.vibrate);
}

 function vibrate() {
	 //alert("vibrraandooo");
        navigator.vibrate(1000);
    }