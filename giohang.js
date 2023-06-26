let api='http://localhost:3000/gioHang'
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