/*date starts*/

setInterval(timer, 1000)
setInterval(Dates, 86400)
function timer() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    document.getElementById("time").innerHTML = hours + ":" + min + ":" + sec
        ;
}
function Dates() {
    var time = new Date();
    var year = time.getFullYear();
    var mon = time.getMonth() + 1;
}
/*date ends*/