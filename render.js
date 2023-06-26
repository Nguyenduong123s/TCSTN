let matHangBanChay = 
[
    {
        id: 1,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/1sopptk.jpg',
        tenGiaoTrinh :'Giáo trình một số PP tìm kiếm',
        gia : 100000
    },
    {
        id: 2,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/asp.net.jpg',
        tenGiaoTrinh :'Giáo trình ASP.NET',
        gia : 900000
    },
    {
        id: 3,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/c++.jpg',
        tenGiaoTrinh :'Ngôn ngữ lập trinh C++',
        gia : 50000
    },
    {
        id: 4,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/cnpm.jpg',
        tenGiaoTrinh :'Giáo trình nhập môn CNPM',
        gia : 55000
    },
    {
        id: 5,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/congNghe_portal.jpg',
        tenGiaoTrinh :'Giáo trình công nghệ portal',
        gia : 45000
    },
    {
        id: 6,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT CƠ KHÍ/vekithuat.jpg',
        tenGiaoTrinh :'Giáo trình vẽ kỹ thuật',
        gia : 25000
    },
    ,
    {
        id: 7,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT CƠ KHÍ/nlcatkl.jpg',
        tenGiaoTrinh :'Sách nguyên lí cắt kim loại',
        gia : 60000
    },
    ,
    {
        id: 8,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT CƠ KHÍ/htsanxuat.jpg',
        tenGiaoTrinh :'Giáo trình hệ thống sản xuất',
        gia : 50000
    }
    ,
    {
        id: 9,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT CƠ KHÍ/qlduan.jpg',
        tenGiaoTrinh :'Sách quản lí dự án',
        gia : 50000
    }
    ,
    {
        id: 10,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT CƠ KHÍ/htdoan.jpg',
        tenGiaoTrinh :'Hướng dẫn quản lí dự án',
        gia : 50000
    }
]
let matHangMoi=[
    {
        id: 1,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/csdl.jpg',
        tenGiaoTrinh :'Giáo trình cơ sở dữ liệu',
        gia : 56000
    },
    {
        id: 2,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/csnhung.jpg',
        tenGiaoTrinh :'Giáo trình cơ sở lập trình nhúng',
        gia : 50000
    },
    {
        id: 3,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/ctdl.jpg',
        tenGiaoTrinh :'Giáo trình cấu trúc dữ liệu và giải thuật',
        gia : 100000
    },
    {
        id: 4,
        anh : './Anh/CÔNG NGHỆ THÔNG TIN/dhud.jpg',
        tenGiaoTrinh :'Giáo trình đồ họa ứng dụng',
        gia : 30000
    },
    {
        id: 5,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/tinhoc.jpg',
        tenGiaoTrinh :'Giáo trình tin học kĩ thuật ôtô',
        gia : 45000
    },
    {
        id: 6,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/ktnhiet.jpg',
        tenGiaoTrinh :'Giáo trình cơ sở kĩ thuật nhiệt',
        gia : 46000
    },
    {
        id: 7,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/kcoto.jpg',
        tenGiaoTrinh :'Giáo trình kết cấu ôtô',
        gia : 48000
    },
    {
        id: 8,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/dcdt.jpg',
        tenGiaoTrinh :'Giáo trình động cơ đốt trong',
        gia : 48000
    },
    {
        id: 9,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/cdktoto.jpg',
        tenGiaoTrinh :'Giáo trình chuẩn đoán kĩ thuật ôtô',
        gia : 58000
    },
    {
        id: 10,
        anh : './Anh/CÔNG NGHỆ KỸ THUẬT Ô TÔ/gamoto.jpg',
        tenGiaoTrinh :'Giáo trình thực hành cơ bản gầm ôtô',
        gia : 52000
    },
]
let sanPhamBanChay=document.querySelector('#sanPhamBanChay');
let sanPhamMoi=document.querySelector('#sanPhamMoi');
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
            
        })
}
function xuLiMuaHang(matHang,id){
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;
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
renderSp(matHangBanChay,sanPhamBanChay,'matHangBanChay');
renderSp(matHangMoi,sanPhamMoi,'matHangMoi');





