
var enddate="28 February 2025 12:00 AM"

var inputs=document.querySelectorAll("input")

function clock(){
    var end=new Date(enddate)
    var now= new Date();
    var diff=(end- now)/1000;
   inputs[0].value=(Math.floor(diff/3600/24))
   inputs[1].value=(Math.floor(diff/3600)%24)
   inputs[2].value=(Math.floor(diff/60)%60)
   inputs[3].value=(Math.floor(diff%60))
}
clock();

setInterval(
    ()=>{
        clock()
    },
    1000
)
