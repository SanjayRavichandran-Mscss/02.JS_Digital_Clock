function runClock(){

    const clock = document.querySelector('.clock');

    var time =new Date();
    // console.log(time);
    var hrs = time.getHours();    //for hours
    // console.log("Hours : ",hrs);

    var min = time.getMinutes();   //for minutes
    // console.log("Minutes : ", min);

    var sec = time.getSeconds();    //for seconds
    // console.log("Seconds : ",sec)

    var txt="AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM"
    }
    else if(hrs==0){
        hrs=12;
        txt="AM";
    }
console.log(`${hrs} : ${min} : ${sec}`);

hrs = hrs<10?'0'+hrs:hrs;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;


clock.innerHTML = `${hrs} : ${min} :${sec} ${txt}`;

}

setInterval(runClock,1000);  // Here , we can specify the function name only , no need to put brackets.

