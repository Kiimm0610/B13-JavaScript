/**
Mô hình 3 khối tính tiền lương
*.* Đầu vào
Lương 1 ngày 100.000
Số ngày làm: 
Tính lương
*.* Xử lý
Tính lương = Lương 1 ngày * Số ngày làm
*.* Đầu ra
Kết quả lương
*/

document.getElementById("btnIncome").onclick = function () {
    var incomeDay = 100000;
    var dayWork = document.getElementById("dayWork").value * 1;
    // Xử lý
    var resultMoney = incomeDay * dayWork;
    // Format
    var formatIncome = new Intl.NumberFormat("vn-Vn");
    // Xử lý
    var showIncome =
        "<p class='alert alert-success'>Lương tháng là: " +
        formatIncome.format(resultMoney) +
        " VND" +
        "</p>";
    // Show
    document.getElementById("resultIncome").innerHTML = showIncome;
};

/**
Mô hình 3 khối tính giá trị trung bình
*.* Đầu vô
Number 1
Number 2
Number 3
Number 4
Number 5
Giá trị trung bình
*.* Xử lý
Tổng 5 số = number 1 + number 2 + number 3 + number 4 + number 5;
Giá trị trung bình = tổng 5 số / 5
*.* Đầu ra
Kết quả giá trị trung bình
*/

document.getElementById("btnTotalNumber").onclick = function () {
    var number1 = document.getElementById("n1").value * 1;
    var number2 = document.getElementById("n2").value * 1;
    var number3 = document.getElementById("n3").value * 1;
    var number4 = document.getElementById("n4").value * 1;
    var number5 = document.getElementById("n5").value * 1;
    //Xử lý
    var totalNumber = number1 + number2 + number3 + number4 + number5;
    var tbTotalNumber = totalNumber / 5;
    var resultTbNumber = "<p class='alert alert-success'> Giá trị trung bình là: "+ tbTotalNumber +"</p>"
    // Show
    document.getElementById("resultTotalNumber").innerHTML = resultTbNumber;
};
