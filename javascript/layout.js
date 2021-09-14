let daysitem=document.getElementById("days");
let hoursitem=document.getElementById("hours");
let minitem=document.getElementById("min");
let secitem=document.getElementById("sec");

var countdown=()=>{
    let futureDate=new Date("30 sept 2021");
    let currentdate=new Date();
    let mydate=futureDate -currentdate;

    let days=Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours=Math.floor(mydate / 1000 / 60 / 60) % 24;
    let min=Math.floor(mydate / 1000 /60 ) % 60;
    let sec=Math.floor(mydate / 1000 ) % 60;

    daysitem.innerHTML=days;
    hoursitem.innerHTML=hours;
    minitem.innerHTML=min;
    secitem.innerHTML=sec;
}
countdown();
setInterval(countdown,1000);