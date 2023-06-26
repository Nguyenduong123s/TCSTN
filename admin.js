
let click=document.querySelector('#login')
let nen=document.querySelector('.nen')
let bang=document.querySelector('#bang')
let cuaSoDanhSach=document.querySelector('#cuaSoDanhSach')
let danhSach=document.querySelector('#danhSach')
let api='http://localhost:3000/donHang'
console.log(login)
login.onclick=function(){
    let tk=document.querySelector('#tk').value
    let mk=document.querySelector('#mk').value
    if(tk=="Nhom7_NXD"&&mk=="nhom7haha")  nen.classList.remove('active')
}
function laySP(){
    fetch(api)
        .then(function(res){
            return res.json();
        })
        .then(function(value){
            render(value)
        })
}
function render(donHang){
    let i=0;
    let html=donHang.map(function(donHang){
        let array=donHang.data
        let kq='';
        for(let j=0;j<array.length;j++){
            let obj=`
            {
                anh : '${array[j].anh}',
                tien : ${array[j].tien},
                soLuong : ${array[j].soLuong},
                tenGiaoTrinh : '${array[j].tenGiaoTrinh}'
            },
        `
        kq=kq+obj
    }
    console.log(`[${kq}]`)
        i++;
        return`
        <tr class="thanhPhan dh-${donHang.id}">
            <td>${i}</td>
            <td>${donHang.khac.ten}</td>
            <td>${donHang.khac.sdt}</td>
            <td>${donHang.khac.diaChi}</td>
            <td>${tongTien(donHang.data)}</td>
            <td>${tongSL(donHang.data)}</td>
            <td><input type="button" class="moRong" onclick="hienThi([${kq}])" value="xem thêm" ></td>
            <td>${donHang.khac.gio}:${donHang.khac.phut}  ${donHang.khac.ngay}/ ${donHang.khac.thang+1}/ ${donHang.khac.nam}</td>
            <td><input type="button" value="Xóa" class="xoa" onclick="xoaSP(${donHang.id})"></td>
        </tr>
        `
    })
    let macDinh=`
    <tr id="khung">
        <td>STT</td>
        <td>Họ và tên</td>
        <td>Số điện thoại</td>
        <td>Địa chỉ</td>
        <td>Giá trị</td>
        <td>Số lượng</td>
        <td>Danh sách</td>
        <td>Thời Gian</td>
        <td>Xóa</td>
    </tr>`
    bang.innerHTML=macDinh+html.join('')

}
function tongTien(value){
    let temp=0;
    value.forEach(function(value){
        let tong=value.soLuong*value.tien
        temp=temp+tong
    })
    return temp
}
function tongSL(value){
    let temp=0;
    value.forEach(function(value){
        temp=temp+value.soLuong
    })
    return temp
}
function deleteAPI(id){
    let options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    }
    fetch(api + '/'+id,options)
      .then(function(res){
        return res.json()
      })
      .then(function(){
        
      })
  }
function xoaSP(id){
    let element = document.querySelector(`.dh-${id}`)
    element.remove()
    deleteAPI(id)
}
cuaSoDanhSach.onclick=function(e){
    if(!danhSach.contains(e.target)) cuaSoDanhSach.classList.remove('active')
}
function hienThi(data){
    console.log(data)
    cuaSoDanhSach.classList.add('active')
    let html=data.map(function(data){
        return `
        <div class="mat_hang">  
            <img src="${data.anh}" alt="">
            <p class="ten_sp">${data.tenGiaoTrinh}</p>
            <p class="gia_sp">Giá : ${data.tien} Đ</p>
            <p class="soLuong">Số lượng : ${data.soLuong}</p>
        </div>
        `
    })
    danhSach.innerHTML=html.join('')
}
laySP()
