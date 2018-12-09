var x;

function addNumberIntoString() {
    x = 3 + "some";
    // Tim phan tu HTML co id la demo sau do thay noi dung cua phan tu HTML do bang gia tri cua x
    document.getElementById("demo").innerHTML = x;
}

function addNumberIntoStringWithOperator() {
    x = 1 + 2 + "some";
    document.getElementById("demo2").innerHTML = x;
}
