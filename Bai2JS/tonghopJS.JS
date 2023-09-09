

function onDangKi(){
    //ẩn phần đăng nhập
    //hiển thị divdawng 
    var divDki= document.getElementById("dangki");
    var divDnhap= document.getElementById("dangnhap");

    divDki.style.display = "block";
    divDnhap.style.display ="none";

    

}
function DK(){
    alert("Đăng Kí Thành Công");
    //ẩn phần đăng kí
    //hiển thị div dawng nhập
    var divDki= document.getElementById("dangki");
    var divDnhap= document.getElementById("dangnhap");

    divDki.style.display = "none";
    divDnhap.style.display ="block";
}

function onDangNhap(){
    //ẩn phần đăng kí
    //hiển thị div dawng nhập
    var divDki= document.getElementById("dangki");
    var divDnhap= document.getElementById("dangnhap");

    divDki.style.display = "none";
    divDnhap.style.display ="block";
}
function DN(){
    alert("Đăng Nhập Thành Công");
}

