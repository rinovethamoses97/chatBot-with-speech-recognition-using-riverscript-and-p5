var brain=new RiveScript();
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
        $("#chatBox").append("Bot:: "+reply+"<br>");
    });
}