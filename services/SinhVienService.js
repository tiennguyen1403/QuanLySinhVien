var SinhVienSerVice = function(){
    this.themMoi = function(sinhVien){
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
            method: 'POST',
            data: sinhVien
        })
    }

    var ThemSinhVien = function() {
        console.log('thêm sv!');
    }

    this.xoa = function(MaSV){
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/'+MaSV,
            method: 'DELETE'
        })
    }

    this.capNhat = function(sinhVien){

    }

    this.layDanhSachSinhVien = function(){
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET'
        })
    }

    this.layThongTinSinhVien = function(){

    }
}