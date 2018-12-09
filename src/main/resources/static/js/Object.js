//Ví dụ về khai báo đối tượng:
var mercedes = {
    color: "red",
    model: "S550",
    //hàm trong đối tượng:
    description: function () {
        return this.color + " " + this.model;
    }
};

var bmw = new Object();
bmw.color = "blue";
bmw.model = "X6";

//2 cách truy cập thuộc tính:
mercedes.color;
mercedes["color"];

//truy cập hàm ( giống java)
mercedes.description();

