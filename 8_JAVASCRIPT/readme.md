<!DOCTYPE html>
<html lang="id">
<head>
  <title>Belajar JavaScript di Duniailkom</title> 
</head>
<body>
  <h1>Belajar JavaScript</h1>
  <p> Saya sedang belajar JavaScript di duniailkom </p>
  <div id="result1"></div>
  <div id="result2"></div>
  
  <script>
    // var a = 5;
    let a = "kampus merdeka";
    let b = "kampus merdeka";
    let c = "kampus merdeka";
    const nama = "Budi";
    let terdaftar = false;
    let lengkap_arr =[a, b, nama, terdaftar];
    
    function perkenalan(){
        let asal = "indonesia";
        return console.log("perkenalan nama saya" + nama +" nomor urut" + a ,"sekarang sedang mengukuti" + b  ,"berasal dari" + asal);
    }
    terdaftar = true;
    if (terdaftar === true){
    console.log(nama + "terdaftar sebagai kegiatan kampus merdeka");
    }

    const foo = ['budi','sita','ayu']
    a=foo[0];
    b=foo[1];
    c=foo[2];
    console.log("array = "+nama);
    console.log("a adalah = "+a);
    console.log("b adalah = "+b);
    console.log("c adalah = "+c);
    perkenalan();
    
    </script>
</body>
</html


Nomor 2
a. karena terdaftarnya = FALSE dan itu berlawanan dengan fungsi pengulangan if yang disebutkan
b.nama di definisinikan sebagai cont dan b sebagai let, itu tidak bisa karena mereka sudah beda
c. Tidak bisa dieksekusi, karena variabel "asal" hanya dapat di akses atau digunakan didalam function perkenalan saja

