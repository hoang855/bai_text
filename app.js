// bài A Câu 1;
function findOppositeNumber(){
    let a = parseInt(document.getElementById('t1').value);
    let b = parseInt(document.getElementById('t2').value);
    let c = a / 2;
    if( a > b && b < c ){
        alert( b + c )
    }else if( a > b && b >= c ){
        alert( b - c)
    }else if( b > a || a== b ){
        alert(" Số nhập lớn hơn số nguyên ");
    }
}

// Nhập string
function check_2()
{
    let string_1 = document.getElementById("cong_chuoi_1").value;
    let string_2 = document.getElementById("cong_chuoi_2").value;
    alert("Kết quả là : " + merge2String(string_1,string_2));
}
function merge2String(string_1,string_2){
    let string_3 = 0;
    if(string_1.length > string_2.length){ 
        string_3 = string_1.length;
    }
    else{
        string_3 = string_2.length;
    }
    let a = "";
    for(let i = 0 ; i < string_3; i++ ){
        if(i < string_1.length ){
            a += string_1[i];
        }
        if(i < string_2.length ){
            a += string_2[i];
        }
    }
    return a;
} 





// bài B 



let check__1 = 0;
function check__(){
    let t1 = document.getElementById("t1_");
    let t2 = document.getElementById("t2_");
    let t3 = document.getElementById("t3_");
    check__1++;
    if ( check__1 == 1 ){
        t1.style.display = "block"
    }else if( check__1 == 2){
        t2.style.display = "block";
        t1.style.display = "none";
    }else if( check__1 == 3){
        t3.style.display = "block";
        t2.style.display = "none";
        t1.style.display = "none";
    }else if( check__1 == 4){
        alert("Bạn Đã Hết Lược Chơi: Kết quả đúng là 7524 ")
        return;
    }else{
        alert("Bạn Đã Hết Lược Chơi")
        return;
    }
    check(check__1);
    function check(){
        let prize = document.getElementById("container_prize");
        let number = document.getElementById('input').value;
        if( number == "7524" ){
            // alert("Kết quả đúng")
            prize.style.display = "block";
            t3.style.display = "none";
            t2.style.display = "none";
            t1.style.display = "none";
            return;
        }else if( number == ""){
            alert("Bạn phải nhập số dự đoán");
            return;
        }else{
            alert("kết quả không chính xác");
        }
    }
}
function tat_container_prize(){
    let tnrr = document.getElementById("container_prize")
    tnrr.style.display = "none";
}





