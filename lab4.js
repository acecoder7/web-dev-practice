var ele = document.getElementsByTagName("p");
console.log(ele);
var elec = document.getElementsByClassName("human");
console.log(elec);
var elei = document.getElementById("god");
console.log(elei);
console.log(elei.innerText);
elei.innerText = "ODIN";
console.log(elei.innerText);

var ele = document.getElementById("main");
console.log(ele.innerText);
console.log(ele.innerHTML);
ele.innerText = "hello";
ele.innerHTML = "<h1> HELLO </h1>"

function print() {
    console.log(document.getElementById("inp").value)
}

function hidepass() {
    var ele = document.getElementById("pass")
    ele.type = "password";
}

function showpass() {
    var ele = document.getElementById("pass");
    ele.type = "text";
}


var h = 20

function height() {
    var ele = document.getElementById("height");
    h = h + 10;
    ele.style.height = h + "px"
    console.log(h);
}

var w = 20

function width() {
    var ele = document.getElementById("height");
    w = w * 10;
    ele.style.width = w + "px";
    console.log(w)
}

function bgc() {
    var ele = document.getElementById("height");
    ele.style.backgroundColor = " red"
}

function greet(name, byetext) {
    console.log("hallo guten morgen " + name + " " + byetext);
}

timeout = setTimeout(greet, 3000, "noor", "take care");
console.log(timeout);

// intervalId = setInterval(greet, 1000, "Mansi", "good night");
// // clearInterval(intervalId, 10000);

function display() {
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(display(), 1000);