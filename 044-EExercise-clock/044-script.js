
setInterval(() => {
    let a = new Date()
    let h = a.getHours();
    let m = a.getMinutes()*6;
    let s = a.getSeconds()*6;
    let d = a.getDate()
    let y = a.getFullYear()
    let mo = a.getMonth()
    let w = a.getDay()
    console.log("Hour = ",h,"Min = ", m,"sec = ", s,"date = ", d,"Year = ", y,"Month = ", mo,"Week = ", w);

    let divsec = document.getElementById("sec");
    divsec.style.transform = `rotate(${s}deg)`
    let divmin = document.getElementById("min");
    divmin.style.transform = `rotate(${m}deg)`
    let divhour = document.getElementById("hour");
    let hourhand = (h<=12)?h*30:(h-12)*30;
    console.log(hourhand)
    divhour.style.transform = `rotate(${hourhand + a.getMinutes()*.5}deg)`
}, 1000);
