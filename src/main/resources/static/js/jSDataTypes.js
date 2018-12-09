var x;

//Kieu du lieu chuoi(String)
var s = "Dat";
//Su dung dau nhay kep
var name1 = "Dat";
//Su dung dau nhay don
var name2 = 'Dat';
//Su dung ket hop dau nhay kep va dau nhay don
var name3 = "My name is 'Dat'!";
var name4 = 'My name is "Dat"!';

//Kieu du lieu Number
var number1 = 3;
var number2 = 3.14;
var number3 = 1e2; // result = 100
var number4 = 1e-2; // result = 0.01

//Kieu du lieu Boolean
var bol = true;

//Kieu du lieu Array
var arrCiu = ["Long", "Tuấn Anh", "Tiến", "Trường", "Sơn", "Hậu", "Đạt"];

function addNumberIntoString() {
    x = 3 + "some";
    // Tim phan tu HTML co id la demo sau do thay noi dung cua phan tu HTML do bang gia tri cua x
    document.getElementById("demo").innerHTML = x;
}

function addNumberIntoStringWithOperator() {
    x = 1 + 2 + "some";
    document.getElementById("demo2").innerHTML = x;
}

function getValue() {
    document.getElementById("demo3").innerHTML = arrCiu[3];
}
