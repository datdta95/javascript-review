//Ví dụ về khai báo đối tượng:
var car = {
    color: "red",
    model: "S550",
    //hàm trong đối tượng:
    description: function () {
        return this.color + " " + this.model;
    }
};

//2 cách truy cập thuộc tính:
car.color;
car["color"];

//truy cập hàm ( giống java)
car.description();