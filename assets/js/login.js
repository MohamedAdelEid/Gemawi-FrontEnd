
let user = document.getElementById('username');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let btn_register = document.getElementById('btn');

function valid() {
    var user = document.getElementById('username').value;
    if (user.length <= 2) document.getElementById("1").innerHTML = "<span style='color:red'>valid user</span>";
    else document.getElementById("1").innerHTML = "";
}
function valid_email() {
    var email = document.getElementById('email').value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length)
        document.getElementById("2").innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
    else
        document.getElementById("2").innerHTML = "";
}
function valid_pass() {
    var pass = document.getElementById('pass').value;
    if (pass.length <= 6) document.getElementById("3").innerHTML = "<span style='color:red'>pass must be greater 6 digit</span>";
    else document.getElementById("3").innerHTML = "";

}
function all_valid() {
    if (document.getElementById("1").innerHTML == "" && document.getElementById("3").innerHTML == "" && document.getElementById("2").innerHTML == "") {
        localStorage.setItem('username', user.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pass', pass.value);
        window.open("login.html");

    }

}
let btn_log = document.getElementById("btn_log");
let email_log = document.getElementById('email_log');
let pass_log = document.getElementById('pass_log');

btn_log.onclick = function () {
    if (localStorage.getItem('email') === email_log.value && localStorage.getItem('pass') === pass_log.value) {
        window.open("index.html");

    } else alert("chek pass or email")


}