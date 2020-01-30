//? This JS page will be a util for other HTML pages
//! This is another comment i will update later
//* No more rainy DAYS we have a DAY & Time App

//?       var start = new Date();
//!       console.log(start);


function dAndT(){
    var dt = new Date();
    var today = (dt.getMonth()+1)+"-"+dt.getDate()+"-"+dt.getFullYear();
    console.log(today);
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    console.log(time);
    document.getElementById("time").innerHTML = today + " " + time;
}