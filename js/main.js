function getEle (ele){
    return document.getElementById(ele);
}
//* Bài 1
// - input
// Nhập vào 3 số
// - Code
// Gọi số thứ 1 , 2, 3 là st1, st2, <i class="fas fa-signal-alt-3    "></i>
// Gán số thứ 2 vào x,
// So sánh x với số thứ 1; 
// + x > st1 tiếp tục so sánh tới số thứ 3
// + x < st1 đổi chỗ sth1 và sth2
// Gán số thứ 3 vào x;
// So sánh x với số thứ 2; 
// + x > sth2 => Trả kết quả
// + x <sth2 rồi so sánh x với sth1 rồi trả về sao cho thích hợp
// - output
// Trả về 3 số

// */
var btnbai1 = getEle("btnbai1");
btnbai1.onclick = function (){
    var songuyen1 = parseInt(getEle("songuyen1").value);
    var songuyen2 = parseInt(getEle("songuyen2").value);
    var songuyen3 = parseInt(getEle("songuyen3").value);
    var i = 0;
   for (i=0; i > -1; i++)
{   
    var x = songuyen1;
    if (x > songuyen2) {
        songuyen1 = songuyen2;
        songuyen2 = x;
    }  
    x = songuyen2;
    if (x > songuyen3){
        songuyen2 = songuyen3 
        songuyen3 = x
    } else 
    { i = -2;}
}   
    var mang = [];
    mang.push(songuyen1,songuyen2,songuyen3);
    var thongbao1 = getEle("thongbao1");
    thongbao1.innerHTML = "Sắp xếp tăng dần: " + mang;
    console.log(mang)
}

// Bài 2
// - input
// Chọn thành viên
// - Code
// dùng switch case
// - output
// Chào theo thành viên

var btnbai2 = getEle("btnbai2");
btnbai2.onclick = function (){
    
    var thanhvien  = document.getElementsByName("thanhvien");
    var mang = [];
    var lengthMang = thanhvien.length;

    for (i=0;i<lengthMang;i++){
        if (thanhvien[i].type == 'radio' && thanhvien[i].checked == true)
        mang.push(thanhvien[i].value);
    }
    var thongbao2 = getEle("thongbao2");
    switch (mang[0]){
        case "B":
            thongbao2.innerHTML = "Chào Ba tụi nhỏ";
            break;
        case "M":
            thongbao2.innerHTML = "Chào Mẹ tụi nhỏ";
            break;
        case "A":
            thongbao2.innerHTML = "Chào Anh khốn nạn";
            break;
        case "E":
            thongbao2.innerHTML = "Chào Em khốn khiếp";
            break;
    }
}

// Bài 3
// - input
// Nhập số 
// - Code
// Số chia hêt cho 2 và không chia hết cho 2
// - output
// Sắp xếp

var btnbai3 = getEle("btnbai3");
btnbai3.onclick = function (){
    
    soNguyen = document.getElementsByClassName("form-control3");
    lengthMangBai3 = soNguyen.length;
    mangSoChan = [];
    mangSoLe = [];

    // console.log(typeof(mangSoChan));
    for (i=0;i<lengthMangBai3;i++){
        if (soNguyen[i].value%2 == 0){
            mangSoChan.push(soNguyen[i]);
        }else{
            mangSoLe.push(soNguyen[i]);
        }
    }
    var thongbao3 = getEle("thongbao3");

    console.log (typeof(mangSoChan));
    console.log ((mangSoChan));
    thongbao3.innerHTML = "Sắp xếp tăng dần: " + mangSoChan; 

    // thongbao3.innerHTML = "Mảng số chẳn gồm " + mangSoChan.length + " số chẳn" + 
    // "<br>Mảng số lẻ gồm " + mangSoLe.length + " số lẻ ";
}   

// Bài 4
// - input
// Nhập 3 canh
// - Code
    //  a = b =c đều
    // 2 cạnh bằng nhau = cân
        // tổng bình phương 2 cạnh = bình phương cạnh thứ 3 = vuông cân
    // tổng bình phương 2 cạnh = bình phương cạnh thứ 3 = vuông
    // Còn lại = thường
// - output
// Tam giác đó là gì?

var btnbai4 = getEle("btnbai4");
btnbai4.onclick = function (){
    canh1 = parseFloat(getEle("canh1").value);
    canh2 = parseFloat(getEle("canh2").value);
    canh3 = parseFloat(getEle("canh3").value);
    var thongbao4 = getEle("thongbao4");

    if (canh1 == canh2 && canh2 == canh3){
        thongbao4.innerHTML = "Tam giac tao thanh la tam giac đều.";
    }else if(canh1 == canh2 || canh3 == canh2 || canh1 == canh3 ){
       if (canh1*canh1 == (canh3*canh3 + canh2*canh2) || canh2*canh2 == (canh3*canh3 + canh1*canh1) || canh3*canh3 == (canh1*canh1 + canh2*canh2)){
        thongbao4.innerHTML = "Tam giac tao thanh la tam giac vuông cân.";
       }else{
        thongbao4.innerHTML = "Tam giac tao thanh la tam giac cân.";
       }
    }else if (canh1*canh1 == (canh3*canh3 + canh2*canh2) || canh2*canh2 == (canh3*canh3 + canh1*canh1) || canh3*canh3 == (canh1*canh1 + canh2*canh2)){
        thongbao4.innerHTML = "Tam giac tao thanh la tam giac vuông.";
    }else {
        thongbao4.innerHTML = "Tam giac tao thanh la tam giac thường.";
    }
}



   

