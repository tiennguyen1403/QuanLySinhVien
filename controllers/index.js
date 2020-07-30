// Tạo đối tượng service tương tác backend
var svService = new SinhVienSerVice();


var xoaSinhVien = function() {
    console.log('xoa sv!');
}

var renderSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();

    promise.then(function(res){
        //Tạo <tr> table
        //Tạo nội dung các thẻ tr
        var htmlContent = '';
        
        document.getElementById('tblSinhVien').innerHTML = htmlContent;
        
        for(var i = 0; i < res.data.length; i++){
            //mỗi lần duyệt lấy ra 1 đối tượng
            const sinhVien = res.data[i];
            //từ đối tượng sinh viên tạo ra thẻ tr
            htmlContent +=
            `<tr>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.HoTen}</td>
                <td>${sinhVien.Email}</td>
                <td>${sinhVien.SoDT}</td>
                <td>${sinhVien.DiemToan}</td>
                <td>${sinhVien.DiemLy}</td>
                <td>${sinhVien.DiemHoa}</td>
                <td><button class="btn btn-danger" onclick="xoaSV('${sinhVien.MaSV}')">Xóa</button></td>
            </tr>`

            document.getElementById('tblSinhVien').innerHTML = htmlContent;
        }

        //refresh input
        document.getElementById('MaSV').value = '';
        document.getElementById('HoTen').value = '';
        document.getElementById('Email').value = '';
        document.getElementById('SoDT').value = '';
        document.getElementById('DiemToan').value = '';
        document.getElementById('DiemLy').value = '';
        document.getElementById('DiemHoa').value = '';

        console.log(res.data)
    }).catch(function(error){
        console.log(error.response.data)
    })
}

renderSinhVien();

var themSV = function(){
    var MaSV = document.getElementById('MaSV').value.trim();
    var HoTen = document.getElementById('HoTen').value.trim();
    var Email = document.getElementById('Email').value.trim();
    var SoDT = document.getElementById('SoDT').value.trim();
    var DiemToan = document.getElementById('DiemToan').value.trim();
    var DiemLy = document.getElementById('DiemLy').value.trim();
    var DiemHoa = document.getElementById('DiemHoa').value.trim();

    var sinhVien = new SinhVien(MaSV, HoTen, Email, SoDT, '123456', DiemToan, DiemLy, DiemHoa)

    var promise = svService.themMoi(sinhVien)

    promise.then(function(res){
        renderSinhVien();
        console.log(res.data)
    }).catch(function(error){
        console.log(error.response.data)
    })

}

var xoaSV = function(MaSV){
    var promise = svService.xoa(MaSV)

    promise.then(function(res){
        renderSinhVien()
        console.log(res.data)
    }).catch(function(error){
        console.log(error.response.data)
    })
}
const ThemDiaChiSV = function(){
    console.log("address");
  }


//userA
var capNhatSinhVien = function(id, sinhVienUpdate){
    console.log('Cập nhật sinh viên' + id)
}
>>>>>>> 050bf6d89827648c477e50f7feec2c8cb12a5287
