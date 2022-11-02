setInterval(() => {

    d = new Date();

    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hcircle = 30*htime + mtime/2;
    mcircle = 6*mtime;
    scircle = 6*stime;

    hour.style.transform= `rotate(${hcircle}deg)`;
    minute.style.transform=`rotate(${mcircle}deg)`;
    second.style.transform=`rotate(${scircle}deg)`


}, 1000);