var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum&#39;at','Sabtu'];
var bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
var tanggal = new Date().getDate();
var _hari = new Date().getDay();
var _bulan = new Date().getMonth();
var _tahun = new Date().getFullYear();
var hari = hari[_hari];
var bulan = bulan[_bulan];

var tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;

var jadi = (hari +', '+ tanggal +' - '+ bulan +' - '+ tahun)
document.getElementById("time").innerHTML = jadi;