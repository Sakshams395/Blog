var currentDate = document.getElementById('currentDate');

function sysdate()
{
    var systemDate = new Date();
    var day = systemDate.getDay();
    var dte =  systemDate.getDate();
    var month = systemDate.getMonth();
    var year = systemDate.getFullYear();

    if(day == 1)
    {
        day = 'Monday';
    }
    else if(day == 2)
    {
        day = 'Tuesday';
    }
    else if(day == 3)
    {
        day = 'Wednesday';
    }
    else if(day == 4)
    {
        day = 'Thrusday';
    }
    else if(day == 5)
    {
        day = 'Friday';
    }
    else if(day == 6)
    {
        day = 'Saturday';
    }
    else
    {
        day = 'Sunday;'
    }
    // conditions for months
    if(month == '0')
    {
        month = 'Jan';
    }
    else if(month == '1')
    {
        month = 'Feb';
    }
    else if(month == '2')
    {
        month = 'Mar';
    }
    else if(month == '3')
    {
        month = 'Apr';
    }
    else if(month == '4')
    {
        month = 'May';
    }
    else if(month == '5')
    {
        month = 'June';
    }
    else if(month == '6')
    {
        month = 'July';
    }
    else if(month == '7')
    {
        month = 'Aug';
    }
    else if(month == '8')
    {
        month = 'Sep';
    }
    else if(month == '9')
    {
        month = 'Oct';
    }
    else if(month == '10')
    {
        month = 'Nov';
    }
    else if(month == '11')
    {
        month = 'Dec';
    }



    currentDate.innerHTML = day+" | "+dte+", "+month+" "+year;
}
sysdate();

// for currentTime

var currentTime = document.getElementById('currentTime');

function sysTime()
{
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var sec = time.getSeconds();
    var zone = 0;

    if(hours > 12)
    {
        zone = 'PM';
    }
    else
    {
        zone = 'AM';
    }
    currentTime.innerHTML = hours+":"+mins+":"+sec+" "+zone;
}
setInterval(sysTime, 1000);



// code for stopWatch
var btn = document.getElementById('btn');

function mouseOver()
{
    btn.style.backgroundColor = "darkGrey";
    btn.style.color = "black";
}
function mouseLeave()
{
    btn.style.backgroundColor = "black";
    btn.style.color = "darkGrey";
}

var SW = document.getElementById('stopWatch');

function swColor()
{
    SW.style.backgroundColor = "black";
    SW.style.color = "darkGrey";
}
var limit;

function timer()
{
    limit = parseInt(prompt("Set Timer"));
    console.log('Inside func limit = ',limit);
}


var swseconds = limit;
console.log(limit);
console.log(swseconds);

function startSec()
{
    var z = document.getElementById('display');
    z.innerHTML = swseconds;
    console.log(swseconds);
    swseconds--;
}

function start()
{
    setInterval(startSec, 1000);
}
