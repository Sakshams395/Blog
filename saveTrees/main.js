var btn = document.getElementById("btn");
var quote = document.getElementsByTagName('h2');
var pic = document.getElementsByTagName('img');
function onMouseEnter()
{
    btn.style.background = "black";
    btn.style.color = "greenYellow"
}
function onMouseLeave()
{
    btn.style.background = "greenYellow";
    btn.style.color = "black";
}

function onClick()
{
    pic.src="";
}