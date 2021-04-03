function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let random = getRndInteger(100, 999);
document.getElementById("rnd").value = random;

let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let todayDate = String(date.getDate()).padStart(2, '0');
let datePattern = year + '-' + month + '-' + todayDate;

document.getElementById("fecha").value = datePattern;

document.write(datePattern);
