 let stopButton = document.getElementById('stopButton');
 let readyButton = document.getElementById('readyButton');
 let goButton = document.getElementById('goButton');


 function stopBut(){
    document.getElementById('stopLight').style.background = '#cf1124';
    document.getElementById('readyLight').style.background = '#4b5069';
    document.getElementById('goLight').style.background = '#4b5069';
    document.getElementById('stopButton').style.background= '#cf1124';
    document.getElementById('readyButton').style.background = '#4b5069';
    document.getElementById('goButton').style.background = '#4b5069';
     
 }

function rdyBut(){
    document.getElementById('stopLight').style.background = '#4b5069';
    document.getElementById('readyLight').style.background = '#f7c948';
    document.getElementById('goLight').style.background = '#4b5069';
    document.getElementById('readyButton').style.background = '#f7c948';
    document.getElementById('stopButton').style.background= '#4b5069';
    document.getElementById('goButton').style.background = '#4b5069';
     
}

function goBut(){
    document.getElementById('stopLight').style.background = '#4b5069';
    document.getElementById('readyLight').style.background = '#4b5069';
    document.getElementById('goLight').style.background = '#199473';
    document.getElementById('goButton').style.background = '#199473';
    document.getElementById('stopButton').style.background= '#4b5069';
    document.getElementById('readyButton').style.background = '#4b5069';
}