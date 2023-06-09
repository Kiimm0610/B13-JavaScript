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
    var resultTbNumber =
        "<p class='alert alert-success'> Giá trị trung bình là: " +
        tbTotalNumber +
        "</p>";
    // Show
    document.getElementById("resultTotalNumber").innerHTML = resultTbNumber;
};

/**
Mô hình 3 khối chuyển đổi tiền
*.* Đầu vào
Tỉ giá tiền USD 
Số USD muốn đổi
Số tiền USD đổi quy đổi sang VND
*.* Xử lý
1 USD = 23.500 VND
Số tiền USD đổi quy đổi sang VND = Số USD muốn đổi * Tỉ giá tiền USD
*.* Đầu ra
Kết quả USD đổi quy đổi sang VND 
 */

document.getElementById("btnChangeMoney").onclick = function () {
    var USD = 23500;
    var usdMoney = document.getElementById("usdMoney").value * 1;
    // FormatUSD
    var formatUSD = new Intl.NumberFormat("vn-Vn");
    // xử lý
    var resultUsd = USD * usdMoney;
    var showUsd =
        "<p class='alert alert-success'> Số tiền được quy đổi là: " +
        formatUSD.format(resultUsd) +
        " VND" +
        "</p>";
    // Show
    document.getElementById("resultChangeMoney").innerHTML = showUsd;
};

/**
Mô hình 3 khối tính chu vi, diện tích
*.* Đầu vô
Chiều dài
Chiều rộng
Chu vi 
Diện tích
*.* Xử lý
Chu vi = (Dài + Rộng) * 2
Diện tích = Dài * Rộng
*.* Đầu ra
Kết quả chu vi
Kết quả diện tích
*/

document.getElementById("btnTinhChuNhat").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    //Xử lý
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    var resultChuNhat = "";
    resultChuNhat +=
        "<p class='alert alert-success'> Chu vi là: " + chuVi + "</p>";
    resultChuNhat +=
        "<p class='alert alert-success'> Diện tích là: " + dienTich + "</p>";
    // Show
    document.getElementById("resultTinhChuNhat").innerHTML = resultChuNhat;
};

/**
Mô hình 3 khối tính tổng 2 ký số
*.* Đầu vào
Số
Tổng 2 ký số
*.* Xử lý
Tổng 2 ký số =  hàng chục + hàng đơn vị
hàng chục = số /10
hàng đơn vị = số % 10
*.* Đầu ra
Kết quả tổng 2 ký số
*/

document.getElementById("btnTinhKySo").onclick = function () {
    var kySo = document.getElementById("kySo").value * 1;
    // Xử lý
    var hangChuc = Math.floor(kySo / 10);
    var hangDonVi = kySo % 10;
    var resultKySo = hangChuc + hangDonVi;
   
    var showTongKySo = "<p> Tổng 2 ký số là: " + resultKySo + "</p>";
    // Show
    document.getElementById("resultTinhKySo").innerHTML = showTongKySo;
};
