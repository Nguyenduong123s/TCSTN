let mat_hangCNTT=[
    {
        id: 1,
        anh : './Anh/KIỂM TOÁN/bctc.jpg',
        tenGiaoTrinh :'Báo cáo tài chính',
        gia : 33000
    },
    {
        id: 2,
        anh : './Anh/KIỂM TOÁN/bdkn.jpg',
        tenGiaoTrinh :'Bước đầu khởi nghiệp',
        gia : 49000
    },
    {
        id: 3,
        anh : './Anh/KIỂM TOÁN/dbtkd.jpg',
        tenGiaoTrinh :'Dự báo trong kinh doanh',
        gia : 55000
    },
    {
        id: 4,
        anh : './Anh/KIỂM TOÁN/gtkttc.jpg',
        tenGiaoTrinh :'Giáo trình kế toán tài chính',
        gia : 76000
    },
    {
        id: 5,
        anh : './Anh/KIỂM TOÁN/kthcsn.jpg',
        tenGiaoTrinh :'Kế toán hành chính sự nghiệp',
        gia : 45000
    },
    {
        id: 6,
        anh : './Anh/KIỂM TOÁN/ktqt.jpg',
        tenGiaoTrinh :'Giáo trình kế toán quản trị',
        gia : 33000
    },
    {
        id: 7,
        anh : './Anh/KIỂM TOÁN/kttc.jpg',
        tenGiaoTrinh :'Kế toán tài chính(tham khảo)',
        gia : 56000
    },
    {
        id: 8,
        anh : './Anh/KIỂM TOÁN/kttc2.jpg',
        tenGiaoTrinh :'Giáo trình kế toán tài chính',
        gia : 40000
    },
    {
        id: 9,
        anh : './Anh/KIỂM TOÁN/kttc3.jpg',
        tenGiaoTrinh :'Giáo trình kế toán tài chính(ĐHCNHN)',
        gia : 50000
    },
    {
        id: 10,
        anh : './Anh/KIỂM TOÁN/ktvm.jpg',
        tenGiaoTrinh :'Giáo trình kinh tế vĩ mô',
        gia : 43000
    },
    {
        id: 11,
        anh : './Anh/KIỂM TOÁN/ktvm2.jpg',
        tenGiaoTrinh :'Giáo trình kinh tế vĩ mô(tham khỏa)',
        gia : 35000
    },
    {
        id: 12,
        anh : './Anh/KIỂM TOÁN/ktvslbct.jpg',
        tenGiaoTrinh :'Kế toán và lập báo cáo thuế',
        gia : 35000
    },
    {
        id: 13,
        anh : './Anh/KIỂM TOÁN/ltkt.jpg',
        tenGiaoTrinh :'Giáo trình lý thuyết kiểm toán',
        gia : 40000
    },
    {
        id: 14,
        anh : './Anh/KIỂM TOÁN/ltkt2.jpg',
        tenGiaoTrinh :'Giáo trình lý thuyết kiểm toán 2',
        gia : 40000
    },
    {
        id: 15,
        anh : './Anh/KIỂM TOÁN/marketing.jpg',
        tenGiaoTrinh :'Giáo trình marketing căn bản',
        gia : 56000
    },
    {
        id: 16,
        anh : './Anh/KIỂM TOÁN/marketing.jpg',
        tenGiaoTrinh :'Giáo trình marketing căn bản(tham khảo)',
        gia : 70000
    },
    {
        id: 17,
        anh : './Anh/KIỂM TOÁN/nlkt.jpg',
        tenGiaoTrinh :'Giáo trình nguyên lý kế toán',
        gia : 66000
    },
    {
        id: 18,
        anh : './Anh/KIỂM TOÁN/ppnckhtkd.jpg',
        tenGiaoTrinh :'Phương pháp NCKH trong kinh doanh',
        gia : 66000
    },
    {
        id: 19,
        anh : './Anh/KIỂM TOÁN/ptbctcdn.jpg',
        tenGiaoTrinh :'Phân tích tài chính báo cáo doanh nghiệp',
        gia : 51000
    },
    {
        id: 20,
        anh : './Anh/KIỂM TOÁN/pthdsxkd.jpg',
        tenGiaoTrinh :'Phân tích hoạt đọng sản xuất kinh doanh',
        gia : 66000
    },
    {
        id: 21,
        anh : './Anh/KIỂM TOÁN/ptkd.jpg',
        tenGiaoTrinh :'Phân tích kinh doanh',
        gia : 66000
    },
    {
        id: 22,
        anh : './Anh/KIỂM TOÁN/qttn.jpg',
        tenGiaoTrinh :'Quản trị tác nghiệp',
        gia : 66000
    },
    {
        id: 23,
        anh : './Anh/KIỂM TOÁN/tcqt.jpg',
        tenGiaoTrinh :'Giáo trình tài chính quốc tế',
        gia : 66000
    },
]
let mathangCNTT=document.querySelector('#mat_hang');
let cuaSo_muahang=document.querySelector('#cuaSo_muahang');
function renderSp(matHang,sanpham,fn){
    let html=matHang.map(function(matHang){
    return `
    <div class="matHang">
        <img src="${matHang.anh}" alt="">
        <p id="tenSanPham">${matHang.tenGiaoTrinh}</p>
        <h4 id="giaTien">${matHang.gia}đ</h4>
        <div id="themVaoGioHang" onclick="xuLiMuaHang(${fn},${matHang.id})">THÊM VÀO GIỎ HÀNG</div>
    </div>
    `
})
    sanpham.innerHTML=html.join('');
}
function Close(){
    let cuaSo_muahang=document.querySelector('#cuaSo_muahang')
    let close=cuaSo_muahang.querySelector('i')
    cuaSo_muahang.classList.remove('active')
}
function xuLiGioHang(matHang){
    let api='http://localhost:3000/gioHang'
    let options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(matHang)
      }
      fetch(api,options)
        .then(function(res){
          return res.json()
        })
        .then(function(a){
            console.log(a)
        })
}
function xuLiMuaHang(matHang,id){
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;
      
      // The producing code (this may take some time)
      
        if (x == 0) {
          myResolve("OK");
        } else {
          myReject("Error");
        }
      });
      myPromise.then(
        function(){
            let thongTinSP= cuaSo_muahang.querySelector('#hienThi')
            cuaSo_muahang.classList.add('active')
            let temp={};
            matHang.forEach(function(matHang,index){
            if(matHang.id===id){
            temp={
                tenGiaoTrinh : matHang.tenGiaoTrinh,
                gia : matHang.gia,
                anh : matHang.anh
            };
            thongTinSP.innerHTML=`
            <img src="${matHang.anh}" alt="">
            <div id="thongTin_SP">
                <h3 id="tenSP">${matHang.tenGiaoTrinh}</h3>
                <h2 id="gia">Giá : ${matHang.gia} Đ</h2>
                <div>Số lượng : <input type="number" id="soLuongSP" min="1" value="1")"></div>
                <button type="button" id="click_mua">Cho vào giỏ hàng</button>
            </div>
            <i class="fa-solid fa-circle-xmark dongCuaSo" onclick="Close()"></i>
            `
        }
    })
        return temp;
        }
      )
    .then(function(temp){
        let muaHang = document.querySelector('#click_mua')
        if(muaHang) muaHang.onclick=function(){
            cuaSo_muahang.classList.remove('active')
            temp.soLuong=document.querySelector('#soLuongSP').value
            xuLiGioHang(temp)
        }
    })
}
renderSp(mat_hangCNTT,mathangCNTT,'mat_hangCNTT');