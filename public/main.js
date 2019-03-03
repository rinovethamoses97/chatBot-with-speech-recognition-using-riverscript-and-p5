var brain=new RiveScript();
var speech=new p5.Speech();
var speechRec=new p5.SpeechRec('en-US',speechRecReady);
speechRec.start(true,false);
brain.loadFile("brain.rive").then(loading_done).catch(loading_error);
function loading_done(){
    console.log("Bot loaded");
    brain.sortReplies();
}
function loading_error(error,filename,lineno){
    console.log("Loading Error")
}
function getReply(){
    var userInput=document.getElementById("userInput").value;
    document.getElementById("userInput").value="";
    brain.reply("local-user",userInput).then(function(reply){
        $("#chatBox").append("User:: "+userInput+"<br>");
        speech.speak(reply);
        $("#chatBox").append("Bot:: "+reply+"<br>");
    });
}
function speechRecReady(){
    if(speechRec.resultValue){
        var input=speechRec.resultString;
        brain.reply("local-user",input).then(function(reply){
            $("#chatBox").append("User:: "+input+"<br>");
            speech.speak(reply);
            $("#chatBox").append("Bot:: "+reply+"<br>");
        }); 

    }
}