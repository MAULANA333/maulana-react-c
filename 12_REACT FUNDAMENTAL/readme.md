Pada hari haru tanggal 14 September 2022 saya mempelajari tentang React Fundamental, dimana pada hari itu saya mempelajari beberapa hal sebagai berikut :
-------------------------------------------
JSX
- JSX adalah singkatan dari JavaScript Syntax Extension atau dikenal juga dengan Javascript XML. JSX adalah ekstensi React untuk Javasript. Sintaks JSX mirip seperti    HTML, sehingga membuat kita lebih gampang menyusun elemen pada komponen React.
- Kenapa harus menggunakan jsx?? berikut adalah beberapa alasan nya:
jsc dibuat menggunakan fakta React JS mudah dipelajari dan dikuasai,Mudah dalam menulis komponen, Mendukung reusability komponen,Memungkinkan penciptaan aplikasi isomorfik,Kinerja lebih baik karena Virtual DOM,Ramah SEO,Menghadirkan tools developer langsung dari sumbernya,Penyedia Jasa Pembuatan Aplikasi Berbasis Web diuntungkan oleh JavaScript Library

----------------------------------------------------

REACT COMPONENT
komponen react adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan,behavior,dan state sebagian UI
Beberapa bagian Component React : filterableProductTable,SearchBar,ProductTable,ProductCategoryRow,ProductRow

REACT LIFECYCLE
React Lifecycle adalah siklus hidup yang terjadi pada react , 

Fase Mounting
Fase Mounting adalah fase ketika components di buat atau pertama kali di render ke DOM. Pada fase ini ada tiga methods yang akan di eksekusi yaitu componentWillMount, render, dan componentDidMount.

Fase Updating
Fase updating adalah fase ketika sebuah component akan di render ulang, biasanya ini terjadi ketika ada perubahan pada state atau props yang mengakibatkan perubahan DOM.

Di fase ini adalah 5 methods yang akan di eksekusi.

- componentWillReceiveProps : fungsi ini akan di eksekusi bila state yang ada di component akan di update atau di ubah dengan nilai props yang baru.

- shouldComponentUpdate : tugasnya adalah untuk menentukan apakah sebuah component akan di render ulang atau tidak.Method ini akan mengembalikan nilai boolean true & false, jika true maka component akan di render ulang atau sebaliknya.

- componentWillUpdate : fungsi ini akan di eksekusi jika fungsi shouldComponentUpdate mengembalikan nilai true.
Kemudian kembali method render akan di jalankan

- componentDidUpdate : fungsinya sama dengan componentDidMount yaitu untuk manipulasi DOM dan request data.
penciptaan mounting, proses updateing, dan berakhir unmounting

---------------------------------------------------------------

RENDER BERSYARAT
Render Bersyarat pada React berfungsi sama halnya dengan operator bersyarat pada Javascript. Gunakan JavaScript operator seperti if atau operator bersyarat untuk membuat representasi elemen dari state saat ini, dan React akan memperbarui UI sesuai dengan state tersebut.
 Contoh :
 
 function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

-----------------------------------------------------------------

STRUKTUR DIREKTORI
React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder
- Pengelompokkan berdasarkan fitur atau rute
- Pengelompokkan berdasarkan jenis file
- hindari terlalu banyak nesting
jangan terlalu banyak memikirkannya
