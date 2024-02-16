
document.cookie = "name=sadeq";
document.cookie = "password=12345";

document.querySelector('h1').innerHTML = document.cookie

console.log(document.cookie.includes("password=12345"));