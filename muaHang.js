let api='http://localhost:3000/gioHang'
let apiMuaHang='http://localhost:3000/donHang'
function laySp(){
    fetch(api)
        .then(function(res){
            return res.json()
        })
        .then(renderSp)
}
function renderSp(donHang){
    let muaHang=document.querySelector('#muaHang')
    let html=donHang.map(function(donHang){
        return`
    <div class="mat_hang duong-${donHang.id}">
        <img src="${donHang.anh}" alt="">
        <p class="ten_sp">${donHang.tenGiaoTrinh}</p>
        <p class="gia_sp">Giá : ${donHang.gia} Đ</p>
        <p class="soLuong">Số lượng : ${donHang.soLuong}</p>
        <button type="button" class="xoa_sp" onclick="xoaSP(${donHang.id})">Xóa</button>
    </div>
        `
    })
    muaHang.innerHTML=html.join("");
    thanhTien();
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
    let element = document.querySelector(`.duong-${id}`)
    element.remove()
    thanhTien()
    deleteAPI(id)
}
function thanhTien(){
    let mat_hang=document.querySelectorAll('.mat_hang')
    let temp=0;
    mat_hang.forEach(function(mat_hang){
        let tienString=mat_hang.querySelector('.gia_sp').innerHTML
        let soLuongString=mat_hang.querySelector('.soLuong').innerHTML
        let tien = parseInt(tienString.slice(6,tienString.length-1))
        let soLuong = parseInt(soLuongString.slice(11,soLuongString.length))
        let thanhToan=tien*soLuong
        temp=temp+thanhToan;
    })
    document.querySelector('#tongTien').innerHTML='Tổng tiền : '+temp+' Đ'
}
laySp()
let nen=document.querySelector('.nen');
let thanhToan=document.querySelector('#thanhToan');
thanhToan.onclick=function(){
    nen.classList.add('active')
    sendData()
    DeleteData()
}
function sendData(){
    let datas=[]
    let hangDaMua=document.querySelectorAll('.mat_hang')
    console.log(hangDaMua)
    hangDaMua.forEach(function(hang){
        let anh=hang.querySelector('img').src
        let ten_sp=hang.querySelector('.ten_sp').innerHTML
        let tienString=hang.querySelector('.gia_sp').innerHTML
        let soLuongString=hang.querySelector('.soLuong').innerHTML
        let tien = parseInt(tienString.slice(6,tienString.length-1))
        let soLuong = parseInt(soLuongString.slice(11,soLuongString.length))
        let data={
            anh:anh,
            tien:tien,
            soLuong:soLuong,
            tenGiaoTrinh : ten_sp
        }
        datas.push(data)
    })
    let ten=document.querySelector('#ten').value
    let sdt=document.querySelector('#SDT').value
    let diaChi=document.querySelector('#diachi').value
    let date = new Date()
    let giatri={
        data : datas,
        khac : {
            phut : date.getMinutes(),
            gio : date.getHours(),
            ngay : date.getDate(),
            thang : date.getMonth(),
            nam : date.getFullYear(),
            ten : ten,
            sdt : sdt,
            diaChi : diaChi
        }
    }
    let options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(giatri)
      }
      fetch(apiMuaHang,options)
        .then(function(res){
          return res.json()
        })
        .then(function(a){
            
        })
}
function DeleteData(){
    let mat_hang=document.querySelectorAll('.mat_hang');
    console.log(mat_hang)
    mat_hang.forEach(function(hang){
        let id=hang.className.slice(15,hang.className.length)
        deleteAPI(id)
    })
}