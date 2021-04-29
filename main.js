var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "taking my selfie"){
        console.log("taking selfie ------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        speak();
    }
}
function speak()
{
    var synth = window.speachSynthesies;

    var speak_data = "taking your selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_this);

    Webcam.attatch(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360, height: 250, image_format:'jpg', jpg_quality: 19
});