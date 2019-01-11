const slider1=document.getElementById("slider1");const slider2=document.getElementById("slider2");const slider3=document.getElementById("slider3");var n=0;var t=5;setInterval(function(){t-=1;n+=1;var countd=document.getElementById("countdown").innerHTML="count"+" "+t;var countd=document.getElementById("countdown2").innerHTML="count"+" "+t;var countd=document.getElementById("countdown3").innerHTML="count"+" "+t;if(n===61){n=1}
if(t===0){t=5}
if(n===5||n===20||n===35||n===50)
{timeout1()
function timeout1(){setTimeout(function(){slider1.style.display="none";slider2.style.display=""},)}}
if(n===10||n===25||n===40||n===55){timeout2()
function timeout2(){setTimeout(function(){slider2.style.display="none";slider3.style.display=""},)}}
if(n===15||n===30||n===45||n===60){timeout2()
function timeout2(){setTimeout(function(){slider3.style.display="none";slider1.style.display=""},)}}},1000)