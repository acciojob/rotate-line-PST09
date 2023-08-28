//your JS code here. If required.
var line=document.getElementById("line");
var rotation=0;
setInterval(()=>{
	rotation+=5;
	line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}, 50);
