Pada hari rabu tanggal 14 September 2022 saya mempelajari tentang React Fundamental, dimana pada hari itu saya mempelajari beberapa hal sebagai berikut :
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



=============================================
MENGGUNAKAN INLINE IF DENGAN OPERATOR && (DAN)
=============================================

function Mailbox(props) {
  const unreadMessages =
  props.unreadMessages;
  return(
    <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&     
    <h2>
    You have
  {UnreadMessage.lenght}unread messages.
  </h2>
  }
  <div>
  );
}

===NOTES===
jadi ketika array unreadMessages ini mempunyai nilai lebih besar dari 0 kita akan merender <h2> yang akan menampilkan panjang dari undreadMessage nya, jadi ini bisa bekerja ketika kita punya expresure yang berada dikanan yang adalah elemen angka yg tampil dari unread message dan yang dikirinya adalah true, maka javascrit aka selalu mengevaluasinya menjadi true, namun jika expresure nya false javascript tidak akan merespown adan output tidak akan merespown nya.

===================================================
MENGGUNAKAN INLINE IF-ELSE WITH CONDITIONAL OPERATOR 
===================================================
conditional ? true:false

render () {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
    the user is <b>{ isLoggedIn ? 'currensly' : 'not'}
    </b> logged in.
    </div>
  );
}


NOTES

fungsi sistem diatas adalah untuk menampilkan hasil ketika user nya sudah login maka akan menampilkan hasil currently namun jika belum login akan menampilkan not, contoh :
The user is Currently/not


RENDER LIST PADA REACT

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number)=>
<li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

NOTES

jadi kita dapat membangiun koleksi dari beberapa element atau array of element, dan menyertakannya dalam jsx menggunakan tanda kurung kurawal {}, 
pada contoh kali ini kita akan menggunakanmelakukan render untuk array of number yang kita punya di variable number, kita akan menggunakan fungsi map. dan dalam fungsi map ini kita akan mengembalikan fungsi element <li> dalam setiap itemnya, dimana didalam setiap <li> ini akan muncul teks berupa angkanya lalu array off element itu yang dimasukkan kedalam variable listitem
akan dirender didalam <ul> dan menggunakan ReactDOM.render


===========
KEY
===========

Key membantu react utuk mengidentifikasi item mana yang telah diubah ditambahkan atau dihilangkan. key harus ditambah untuk memberikan identitas yang stabil. (key.id)


=========================
MENANAMKAN MAP() PADA JSX
=========================

function NumberList(props){
  const numbers = props.numbers;
  const listItems = number.map((number) =>
  <ListItem key={number.toString()}
  Value={number}/>
  );
  return (
    <ul>
    {listItems}
    </ul>
  );
}

CONTOH YANG LANGSUNG MASUK KE JSX

function NumberList(props){
  const numbers = props.numbers;
  return (
    <ul>
    {numbers.map((number)
    <ListItem key={number.tostring} ()}
    value={number} />
    )}
    {listItems}
    </ul>
  );
}


==================
DIRECTORY STRUCTURE
===================

PENGELOMPOKKAN BERDASARKAN FITUR ATAU RUTE

common/
avatar.js
avatar.js
APIUtils.js
APIUtils.js
APIUtils.test.js
feed/
index.js
feed.js
feed.css
feedstory.js
profile/
index.js
profile.js
profileHeader.js
profileHeader.cssprofileAPI.js
 
PENGELOMPOKKAN BERDASARKAN JENIS FILE






STYLEING INLINE

===========================
MENGGUNAKAN CLASSES DAN CSS
===========================

//style.css
.button {
  background-color: yellow;
}

//Button.jsx
import './style.css'
const Button = () => {
  return <button className="button"> A
  button</button>
}

ini adlaah cara paling simple dengan memubuat file css dulu


=============
ATRIBUT STYLE
=============

const Button = ( ) => {
  return <button style ={{ backgroundColor: 'yellow' }}>A button</button>
}

-------------------------------------------------------------------------

const buttonstyle = {backgroundColor: 'yellow' }
const Button = () => {
  return <button style ={buttonstyle}>A button</button>
}

ini adalah cara kedua dengan menggunakan atribut style yang nantinya akan ditempel pada element jsx, dan dengan cara ini kita tidak perlu memiliki file css yang terpisah.


=========
MODUL CSS
=========
import style from'./Button.module.css';

const Button = () => {
  return <button className= {style.content}>A button</button>
}


ini adalah cara tengah dari kedua cara diatas, denganmenggunakan Modul css kita akan menggunakan class tapi cssnya hanya terskup pada suatu komponen jadi styleing nya tak akan merambat/tersebar ke komponen lainnya tanpa ada izin dari kita , dan ini sama sepertti css sebelumnya, pertama kita harus defind dulu css filenya tapi yang membedakan nya disini adalah kita harus menamakannya .modul.css
