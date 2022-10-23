Pada hari Rabu tanggal 24 agustus 2022 kemarin saya belajar kontrol Versi dan management cabang GIT, dimana didalamnya saya mempelajari tentang :
- Membuat repositori di github ( repositori adalah struktur data yang menyimpan data, jadi repositori itu berfungsi untuk menyimpan data data tugas yang diberikan oleh alterra academy agar dapat dilihat dan dipantau langsung oleh mentor juga dewan pembimbing kampus merdeka)
- Membuat branch ( Cabang yang digunakan untuk struktur pengumpulan tugas)
- Belajar pengalpikasian VSCODE dan GITHUB 
    - git init
    - git add .
    - git commit ' m "meessage" 
    - git push -u origin master



Pada Hari Jum'at Tanggal 26 Agustus 2022 saya mempelajari tentang sistem pengoperasian sistem Figma, serta mencoba membuat proyek diantaranya :
- Belajar Tools-tools yang ada di figma 
- Belajar membuat tampilan sebuah website dengan tema Healthcare

Pada hari Senin tanggal 29 Agustus 2022 saya belajar tentang HTML, adapun beberapa point yang saya pelajari adalah :
- Belajar membuat website simple
- Belajar pengertian dan analogi HTML,CSS
adapun beberapa materi yang saya pelajari dan mengerti :
-<div> berfungsi untuk memberi tag conten html
- <h1> berfungsi untuk memberi head/judul dari judul 1 sampai 6
- <strong> berfungsi untuk membuat text menjadi lebih tebal
- <em> berfungsi untuk membuat huruf menjadi miring atau membuat penekanan italic
- <s> berfungsi untuk membuat text menjadi tercoret
<br> berfungsi untuk membuat garis baru
jika ingin menambahkan tag Link pada HTML bisa menggunakan <a href="alamat link "> dan jika ingin link tersebut dibuka pada tab baru tinggal tambahkan <target="_blank">
kalau ingin menambahkan foto kedalam website bisa menggunakan format <img src ="file local atau link foto"/>
dan saya juga belajar membuat paragraf urut menggunakan 
- <ol> untuk list berurut
- <ul> untuk list yang tidak berurut
selai itu saya juga belajar untuk membuat tag table html, berikut format yang saya pelajari :
- <table> untuk membuat table pada html
- <tr> untun membuat setiap baris table di deklarasikan 
- <td> untuk membuat setiap kolom table di deklarasikan
- <th> untuk membuat kolom pada table header

Pada hari rabu tanggal 31 agustus saya belajar CSS dengan materi yang saya pelajari sebagai berikut :
- padding: berfungsi untuk memberi jarak pada kotak/elemen lainnya, contoh 30px
- font size : berfungsi untuk memberi ukuran huruf yang akan digunakan, contoh 30px
- Font-family: digunakan untuk merubah style huruf yang akan digunakan, contohnya "slabo"
- (.) berfungsi untuk membentuk class baru

Selain itu saya juga belajar mengunakan frogy flexbox, adapun yanng saya pelajari diantara lain sebagai berikut:
- flex-start : item sejajar dengan sisi kiri wadah
- flex-end : item sejajar dengan sisi kanan wadah
- center : iten sejajar dengan tengah wadah
- Space-around : item ditampilkan dengan jarak yang sama di sekelilingnya
- baseline : item ditampilkan di dasar wadah
- stretch : item diregangkan agar sesuai dengan wadahnya
- row : item ditempatkan sama dengan arah teks
- row-reverse : item ditempatkan berlawanandengan arah teks
- column : item ditempatkan dari atas kebawah
- column-reverse : item ditempatkan dari bawah keatas

Pada hari Jumat Tanggal 2 Septermber 2022 kemarin saya belajar mengenai Menu-menu yang ada di Bootstrap, adapun beberapa hal yang saya pelajari adalah sebagai berikut:
-NAVBAR-
- .navbar-branduntuk nama perusahaan, produk, atau proyek Anda.
.navbar-navuntuk navigasi tinggi penuh dan ringan (termasuk dukungan untuk dropdown).
.navbar-toggleruntuk digunakan dengan plugin penciutan kami dan perilaku beralih navigasi lainnya.
Utilitas fleksibel dan spasi untuk kontrol dan tindakan formulir apa pun.
.navbar-textuntuk menambahkan string teks yang dipusatkan secara vertikal.
.collapse.navbar-collapseuntuk mengelompokkan dan menyembunyikan konten navbar oleh breakpoint induk.
Tambahkan opsional .navbar-scrolluntuk menyetel max-heightdan menggulir konten navbar yang diperluas .
CONTAINER/WADAH
.container, yang menetapkan a max-widthpada setiap breakpoint responsif
.container-fluid, yang width: 100%sama sekali breakpoints
.container-{breakpoint}, yaitu width: 100%sampai breakpoint yang ditentukan
ROW (Untuk membuat suatu kotak berdasarkan ukuran tertentu menyamping, maksimal dalam sebuah website adalah 12 row  )
Column ( Untuk membuat suatu kotak berdasarkan ukgituran tertentu Kebawah, maksimal dalam sebuah website adalah 12 Column  )

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

Pada hari jumat tanggal 9 septermber2022 saya mempelajari materi tenttang clean code. adapun beberapa materi tentang clean code antara lain sebagai berikut:


clean code adakah istilah atau kode yang mudah dipahami, mudah dibaca, dan mudah diubah oleh programer
kenapa clean code? karena kita akan bekerja dengan berkolaborasi dan orang lain harus bisa membaca apa yang kita kerjakan juga
karakteristik clean code : penamaan mudah dipahami, mudah dieja dan dicari, singkat namun mendeskripsikan konteks

Penamaan variable dan fungsi
Penamaan variable dan fungsi pada proyek kami menggunakan aturan camel case. Nama yang diberikan untuk suatu variable atau fungsi bersesuaian dengan apa yang dilakukan oleh variable atau fungsi tersebut.

Fungsi yang efektif
Fungsi yang efektif hanya melakukan satu hal. Fungsi initState() pada potongan kode sebelumnya hanya bertugas menginisiasi state halaman course dengan cara membuat dua tab pada halaman tersebut.

DRY
Pada proyek, kami telah menerapkan prinsip reuse untuk kode yang digunakan lebih dari satu kali. 


Algoritma adalah sekumpulan aturan yang tersusun sistematis untuk memecahkan suatu masalah. 

KARAKTERISTIK ALGORITMA:

Clear and unambiguous   : Setiap proses atau langkah-langkahnya harus benar-benar jelas di setiap aspeknya. Hal tersebut juga wajib mengarah hanya ke satu makna saja. 
Well-defined input      : Input harus terdefinisi dengan jelas. Inputnya harus seperti apa supaya program bisa bekerja.  
Well-defined output     : Hasil dari outputnya jelas dan terdefinisi dengan baik. 
Finite-ness             : Sifatnya terbatas. Hal itu wajib memiliki batasan proses dan merujuk suatu hasil tertentu. Algoritma tidak boleh menuju suatu loop tak terbatas. 
Feasible                :  Algoritma yang layak harus tersusun secara sederhana, umum, dan praktis. Hal tersebut juga harus bisa beroperasi menyesuaikan sumber daya yang tersedia. 
Language independent    : Programmer harus merancang algoritma yang bisa mereka implementasikan di bahasa pemrograman apapun. Apapun bahasa pemrogramannya, hasilnya harus tetap sama. '


Pada hari senin tanggal 12 september 2022 saya mempelajari tentang introduction React, dimana kita belajar mengenal React

React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web.
 JavaScript adalah bahasa pemrograman yang dapat membantu kita membuat konten web yang dinamis, seperti form, slideshow, atau konten interaktif lainnya. 

Dengan JavaScript, kita dapat membuat tampilan website yang lebih menarik. Nah, inilah mengapa library ini berguna untuk membangun UI, karena pengaplikasian kode JavaScript di website kita bisa menjadi lebih mudah.

Kenapa harus React? karena React sudah popular dan sudah banyak orang yang menggunakannya, jadi kalau ada kesulitan atau trouble pada codingan kita, banyak jalan keluar yang bisa kita caridi website ataupun sebagainya.

Virtual DOM (VDOM) adalah sebuah konsep dalam pemrograman di mana representasi ideal atau “virtual” dari antarmuka pengguna disimpan dalam memori dan disinkronkan dengan DOM “yang sebenarnya” oleh library seperti ReactDOM. Proses ini disebut reconciliation.

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


pada hari jumat tanggal 16 september 2022 saya memppelajari materi tentang state, statefull &stateless, handling event. berikut adalah penjelasan lengkapnya :

State, state adalah data private sebuah komponen.Data ini hanya tersedia untuk komponen tersebut dan tidak bisa diakses dari komponen tersebut dan tidak bisa diakses dari komponen lain.

lalu saya juga belajar tentang, stateful component, Stateful component adalah komponen yang memiliki state, kelebihan komponen ini adalah memiliki lifecycle, selain memiliki banyakmstate , state full juga banyak memiliki logic karena memiliki lifecycle.

lalu setelah itu ada stateless componen, beda dari statefull, stateless component ini tidak memiliki state, hanya memiliki prop, umumnya komponen ini dibuat dengan function karena codenya lebih ringkas.

dihari itu juga saya belajar mengimplementasikan semua yang telah dipelajari dalam bab handling ecvent, dimana kita diminta unutk membuat sebuah mesih suhu yang reaktif menggunakan javascript dan juga react.

-------------------------
CONTOH KOMPONEN STATEFULL
-------------------------

import { component } from "react";
import Child from './child';

class parent extend component {
    constructor{props}
    super(props)

    this.state ={
        nilai : 1
    }
}
render () {
    return (
        <div>
        <child nilai ={this.state.nilai}>/>
        </div>
    )
}

------------------------
CONTOH KOMPONEN STATELESS
------------------------

import {component} from "react";
class child extends component
render()
return ()
<div>
<p>Hasil adalah {this.props.nilai}</p>
        )
    )
)


selain itu saya juga mempelajari tentang handling event, event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen,misalnya tombol ditekan.

----------------------
CONTOH PENULISAN EVENT 
----------------------

===HTML====
<button onClick="activeLser ()">
activate lasser
</button>

======
REACTT
======
<button onClick = {this.activelasers}>
Activate Lassert
</button>

REACT HOOKS
pada Senin 19 september 2022 saya mempelajari materi tentang  React Hooks , Hook adalah fungsi spesial yang memungkinkan Anda “terhubung” dengan fitur-fitur di React. Sebagai contoh, useState adalah sebuah Hook yang memungkinkan Anda memberi state pada function components

===========================
FUNCTION COMPONENT
===========================


const Example = (props) => {
    <!-- //anda bisa menggunakan hooks didalamnya -->
    return <div />;
}

function Example(props) {
    <!-- //anda bisa menggunakan hooks didalamnya -->
    return <div />;
}



---------------------IMPLEMENTASI HOOKS -------------------------

class Example extend React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }
    render () {
        return (
            <div>
            <p>Anda menekan sebanyak
            {this.state.count} kali</p>
            <button onClick={() => this.setState({
    count: this.state.count + 1 })}>
    Klik saya 
    </button>
    </div>
        );
    }
}

----------------DEKLARASI VARIABLE STATE----------------------

classa Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }

    import {useState} from 'react' ;
    function Example (){
        <!-- // deklarasi variabel state baru yang kita sebut "count"  -->
        const [count, setCount] = useState(0);
    }

Dengan memanggil useSate kita akan menyimpan suatu state dalam suatu variable, untuk contoh yang diatas adalah count 



MEMBACA STATE------

<!-- penggunaan pada class component -->
<P> Anda menekan sebanyak {this.state.count} kali </p>

 <!-- penggunaan -->pada function component
 <p> Anda menekan sebanyak {count} kali<p>

-------------CARA MELAKUKAN PEMBARUAN STATE--------------------------

/////Penggunaan pada class component ////

button onClick{() => setCount(count + 1)}>
Klik saya
</buton>

// penggunaan pada function component//
 <button onClick={() =>setCount(count + 1)}>
 Klik saya
 </button>

COMPONEN YANG SUDAH DIRUBAH MENGGUNAKAN useState

import React, { useState } from 'react';

function Example () {
    const [count, setCount] = useState(0)

    return (
        <div>
        <p>Anda menekan sebanyak (count) kali </p>
        <button onClick ={() setCount(count + 1)}>
        Klik saya
        </button>
        </div>
    );
}

TIPS MENGGUNAKAN BANTAK VARIABEL STATE

function ExampleWithManyStates() {
    // Deklarasi banyak variabel state !
    const [age,setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

}
===========================
useEffec
===========================

useEffect adalah Hook yang memungkinkan kita melakukan efek samping (side effect) bdidalam functio component, setEffectnya bisa pengambilan data atau pengaturan subscription juga perubahan manual DOM bisa dilakukan menggunakan useEffect. jika kita familiar dengan componentDidMount, componentDidUpdate,dan componenWillUnmount , componen coomponen tersebut mirip dengan useEffect, atau dengan kata lain, useEffect ini yang menggantikan rycyle method dari ke-3 fungsi componen tersebut.

ada dua jenis useEffect: Butuh pembersihan dan tidak butuh pembersihan 

(contoh useEffect tanpa pembersihan)

class Example extend React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    omponentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
}

render (){
    return (
        <div> 
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count +1 })}>
        Click me
        </button>
        </div>
    );
}
}

(EFEK DENGAN PEMBERSIHAN)

class FrienStatus extend React.Component {
    constructor(props);
      super(props);
      this.state = { isOnline: null };
      this.handleStatusChange = this.handleStatusChange.bind(this);
}

componentDidMount() {
    ChatAPI.subscribebeToFriendStatus(
        this.props.friend.id,
        this.handleStatisChange
    );
}
handleStatusChange(status){
    this.setState({
        isOnline: status.isOnline
    });
  }
render(){
    if (this.stateisOnline === null) {
        return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline'
  }
}

===============================================
MENGOPTIMALKAN PERFORMA DENGAN MELEWATI EFFECTS
===============================================

componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
   document.title = `Youclicked ${this.state.count} times`;     
    }
}

useEffect(() => {
    document.title =`You clicked ${count} times`;
   }, [count]); //only re-run the effect if count change//


   Custom Hooks 
   Membuat Hook kita senduru memungkinkan kita mengekstrak komponen logika kefungsi yang dapat digunakan lagi.

CONTOH:

 komponen yang memiliki fungsi untuk mengambil windowns win atau lebar dari windowns web browser dari user jadi saya bisa tau kapan user itu merubah ukuran layarnya.

 const Mycomponent =() => {
    const [onSmallScreen. setOnSmallScreen] =useState(false);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        },[]);

        let checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < 768);
        };
        return (
            <div className={`${onSmallScreen ? "small" : "large"}`}>
              <h1>Hello World</h1>
              </div>
        );
    };
    
    
    ----------Contoh custom Hooks nya----------
    import {useState, useEffect} from "react";

    const useWindowsWidth = () => {
        const [isScreenSmall, setIsScreenSmall] = useState(false);

        let checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth <600>);
            };
            useEffect(() => {
                checkScreenSize();
                window.addEventListener("resize", checkScreenSize);
            }, []);

            return isScreenSmall;
        };
        export default useWindiwsWidth;



        ///JIKA PENGGUNAANNYA TERPISAH MAKA IMPORRT TERLEBIIH DAHULU///

        import React from'react'
        import useWindowWidth from'./useWindowWidth.js

        const MtComponent = () => {
            Const onSmallScreen =useWindowWidth ();

            return ( 
                <div> className={`${onSmallScreen ? "small" : "large"}`}>
                <h1>Hello World!</h1>
                </div>
            )
        }

    

    Pada tanggal 21 september 2022 saya mempelajaari materi tentang React Routing, berikt adalah beberappa materi yang saya pelajari.

Router adalah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Singel page application)

MPA(Multi Page Application) juga disebut sebagaio traditional web app, yaitu jenis aplikasi website dimana perlu membuat ulang seluruh halaman web setiap kali membuat permintaan baru.

SINGEL PAGE APPLICATION (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

keunggulan SPA dan MPA

SPA
- Waktu loading website jauh lebih cepat
- Tidak ada query tambahan ke server
- Front-end yang cepat dan responsif
- Meningkatkan pengalaman pengguna (user  experience)

MPA
- SEO  website akan lebih mudah dioptimasi 
- Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
- Menggunakan tools analisis seperti google Analytics yang dapat terintegrasi langsung dengan website.

Kekurangan SPA dan MPA

SPA
- Tidak bagus dalam hal SEO
- Berat saat di-load pertama kali
- kurang aman dibanding dengan website biasa
- Masalah kompatibilitas

MPA
- Kecepatan download website jauh lebih lama jika dibandingkan dengan singel page application
- Kamu perlu mengintegrasikan antara front enddanback-end
- lebih sering membutuhkan maintenance dan update
- mungkin akan lebih sering menemukan masalah performa pada website.


CARA MENGINSTALL ROUTER

npm install react-router-dom --save

=============
BrowserRouter
=============

import react from 'react''
import {BrowserRouter. Route, Switch } from 'react-router-dom';

import NotFound from'./pages/Notfound';
import Home from './pages/Home';
import profil from'./pages/profil';
import ProfilDetail from './pages/profilDetail';

function App () {
    return {
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/profil" exact component={profil}/>
        <Route path="/profil/:name" exact component={ProfilDetail}/>
        <Route component={Notfound}/>
        </Switch>
        </BrowserRouter>
    }
}


export default App;




berikut adalah komponen yang digunakan sebagai router yag didalamnya itu menggunakan API history dari HTML5 sehingga dengan ini kita dapat menggunakan location untuk mensinkronkan UI dengan URL, jadi pada saat kiata membungkus aplikasi kita didalam BrowserRouter, komponenkomponen yang ada didalamnya dapat mengakses object location yang mmerepresentasikan dimana lokasi aplikasi kita sekarang.



Route digunakan sebagai pengarah jalanyya lalu lintas suatu aplikasi web

Attribuete Component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan.

Switch digunakan untuk membungkus kumpulan beberapa component Route.

Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok. jika  tidak ada yang cocok, maka route yang akan di render yaitu route terakhir dengan component Notfound.

========
LINK
=========

import React from 'react';
import { link } from 'react-router-dom'

function Home(props){
    return (
        <>
          <h2>
            Home page
          </h2>
          <link to ="/profil">menuju profil</link>
          </>
    )
}

export default Home;


Parameter URL adalah suatu parameter yang nilainya ditetepkan secara dinamis di URL halaman.

URL Param

/movie/titanic
/movie/spiderman
/movie/batman

<Route exact path="/movie/:id" component={MovieDetailsContainer}/>


=======================
this.props.match.params 
=======================

import { Component } from "react";

class MovieDetailContainer extends Component {
    render() {
        console.log(this.props)
        return(
            <div></div>
        )
    }
}



import { Component } from "react";

class MovieDetailContainer extends Component {
   state = {
    id : ""
   } 
   componentDidMount() {
    this.setstate({id : this.props.match.params.id})
   }
    render() {
        return(
            <div>
               <h1>Param id nya adalah {this.state.id}</h1>
            </div>
        )
    }
}

export default MovieDetailsContainer;




===========================
Perbedaan Link dan Redirect
===========================

LINK
- Dapat digunakan pada kondisi apapun 
- Memberikan history baru pada browser
- Bereaksi dengan click seperti a href


REDIRECT
- Lebih sering digunakan pada halaman 404
- menimpa history pada browser
- Bereaksi dengan suatu konsisi

CONTOH PERBEDAAN

LINK
import React from 'react';
import { link } from 'react-router-dom'

function Home(props){
    return (
        <>
          <h2>
            Home page
          </h2>
          <link to ="/profil">menuju profil</link>
          </>
    )
}

REDIRECT
<Route exact path="/">
 {loggedIn} ? <Redirect to=" /dashboard"/> : <PublicHomePage/>}
 </Route>

 Jadi pada path home ini ketika user akses kita cek apakah user sudah log in atau belum, kalau sudah login kita akan redirect  usernya ke dashboard, ketika di render, otomatis akan ke rdirect, ketika login nya false atau belum login kita akan masuk kedalam public home page.




===============
===============
===============
HOOK ROUTING
===============
===============
===============


------USE HISTORY--------

import { useHistory } from 'react-router-dom'

function MovieDetailsContainer() {
    const histrory = useHistory();
    const count = history.length;
    return (
        <div>
           <h1> (count)</h1>
        </div>
    )
}
export default MovieDetailsContaier;


useHistory memberi kita ke instance riwayat yang dapat kita gunakan untuk bernavigasi.

contoh:
1. length : (angka) jumlah entri dalam tumpukanriwayat
2. go : (Fungsi) memindahkan penunjuk di tumpukkan riwayat sebanyak n entri
3. goBack : (fungsi) setara dengan go(-1)
4. goForward : (fungsi) setara dengan go(1)
5. Push : (fungsi) mendorong entri baru ke tumpukkan riwayat
6. replace : (fungsi) Mengganti entri saat ini ditumpukkan riwayat history.

Dan seterusnya....


------useLocation--------
useLocation mengembalikan objek lokasi yang meawkili URL saat ini.Kita dapat memikirkannya seperti useState yang mengembalikan lokasi baru,setiap kali URL berubah.


import ( useLocation ) from 'react-router-dom'

function MovieDetailsContainer() {
    const address = useLocation()
    console.log('address => '. address)
    return (
        <div>
        </div>
    )
}
export defaultt MovieDetailsContainer



---------useParams-----------
useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.


import { useParams } from 'react-router-dom'

function MovieDetailsContainer() {
    const {fistName, lastName} = useParams()

    return (
        <div> 
           <h1>Hai, {firstName] {lastName} !</h1>
        </div>
    )
}

export default MovieDetailContainer;



<Route path="/movie/:firstName" component={MovieDetailsContainer}/>


--------------useRouteMatch---------
useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>.
ini sebagian besar berguna untuk mendapatkan akses ke data kecocokkan tanpa benar-benar merender <Route>


import { Rote } from "react-router-dom"

function BlogPost() {
    return (
        <route 
        path="/blog/:slug"
        render={({ match}) => {
            ///Do WhatEver you want with the watch///
            }}
          /
        />
     );
    }


Pada hari jumta tanggal 23 september 2022 saya belajar tentang react form, adapun beberapa materi yang dipelajari antara lain :

BASIC FORM

--Penerapan Form--

form merupakan salah satu hal krusial dalam pengembangan aplikasi website.Form dapat digunakan untuk mengandle inputan dari user.

form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.

Dalam react akan ada banyak hal yang kita pelajari dari form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi iniputan dsb. Untuk saat ini kita akan belajar Basic Form.

==MACAM-MACAM FORM==

ELEMENT <input>
Element <input> biasanya digunakan inputan yang tidak berlaku panjang.

<label>
<p>Name</p>
<inputan name="name" />
</label>

ELEMENT <textarea> 
Element <textarea> biasanya digunakan inputan yang cukup panjang seperti deskripsi.

<label>
<p>Deskripsi</p>
<textarea name="deskripsi" />
</label>

ELEMENT <select>

Element <select> biasanyadigunakan untuk inputan yang pilihannya sudah dientukan.

<label>
<p>Apel</p>
<select name="apel">
<option value="">--Pilih Salah Satu--</option>
<option value="fuji">Fuji</option>
<option value="jonathan">Jonathan</option>
<option value="honey-crisp">Honey-Crisp</option>
</select>
</label>


CHECKBOX
Chekbox merupakan salah satu type di element <input>. kita bisa memilik lebih dari satu 1 pilihan menggunakan check box.

<label>
<p>Kelas Yang Diambil</p>
<input type="checkbox" name="pagi" value="pagi" />Pagi</input>
<input type="checkbox" name="siang" value="siang" />Siang</input>
<input type="checkbox" name="sore" value="sore" />Sore</input>
</label>

TYPE ELEMENT INPUT LAINNYA SELAIN YANG DICONTOHKAN DIATAS
- text
- button 
- color
- date
- datetime-local
- email
- file
- hidden
- image
- dll




RADIO BUTTON
Radio Button merupakan salah satu type di elemen <input>. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.

<label>
<p>Jenis Kelamin</p>
<input type="radio" name="laki-laki" value="laki-laki"/>Laki-laki</input>
<input type="radio" name="perempuan" value="perempuan"/>Perempuan</input>
</label>



CONTROLLED COMPONENT 
Controlled component, kita dapat menggabungkan cara menyimpan dan mempoerbarui state di HTML dan React dengan menggunakan state pada React kemudian komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam dorm tersebut pada masukkan pengguna selanjutnya.

sebuah elemen masukkan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut juga sebagai "controlled component"

CONTOH DARI CONTROLLED COMPONENT UNTUK FORM

import React, { useState } from 'react' ;

export default function nameForm( ) {
    const [name, setName] = useState( ' ');

    const handleChange = (e) => {
    };
    const handle change = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        alert('A name was submitted:  + name)
        e.preventDefault();
    };
    return (
        <form onSubmit ={handleSubmit}>
        <label>
            Name: 
            <input type= "text> value={name} onChange={handleChange}/>
            </label>
            <input type= "submit" value="submit">
            </form>
    );
};




UNCONTROLLED COMPONENT
Uncontrolled Component adalah alternatif antara lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan nilai form dari DOM.

Karena hal ini terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walaupun tak rapi.Selain itu pada umumnya kita harus menggunakan controlled component.

Contoh UNCONTROLLED COMPONENT

import React, { useState } from 'react' ;

export default function nameForm( ) {
    const input = useRef(null);

    const handleSubmit = (e) => {
        alert('Sebuah nama telah dikirim: ' + input.current.value);
        e.preventDefault();

    };
    return (
        <form onSubmit ={handleSubmit}>
        <label>
            Name: 
            <input type= "text" ref ={input} />
            </label>
            <input type= "submit" value="Kirim">
            </form>
    );
};


NILAI DEFAULT 

Atribut defaultValue 
Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan menentukan nilai awal tapi pembaruan berikutnya dilakukan secara uncontrolled.unutuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih alih menggunakan value.


Contoh penerapan default Value 

return 
<form onSubmit={this.handleSubmit}>
<label>
Nama:
<input 
defaultValue="Budi
ref={input} />
</label>
</input type="submit" value="kiim" />
</form>
);

kita bisa menggunakan defaultChecked untuk <input type="checkbox"> dan <input type="radio">, serta dafaultValue untuk <select> dan <textarea>.

TAG FILE INPUT 

pada HTML, sebuah <input type="file"> memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanupulasi dengan JavaSript lewat File API.

Dalam React, sebuah <input type="file"/> merupakan uncontrolled component karena nilainya hanya bisa distel oleh pengguna, buka oleh kode program.

contoh penerapan uncontrolled component pada input tag file

import React, { useState } from 'react' ;

export default function nameForm( ) {
    const fileInput = useRef(null);

    const handleSubmit = (e) => {
        alert(
            Selected file - ${fileInput.current.files[0].name}'
    };

    return (
        <form onSubmit ={handleSubmit}>
        <label>
           Upload file:

            <input type= "file" ref ={fileInput} />
            </label>
            <br />
            <input type= "Submit"</button>
            </form>
    );
};



BASIC VALIDATION PADA FORM INPUT

--KENAPA KITA PERLU VALIDASI--

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :
- mencari input daataa yang benardan sesuai format. sebuah web/aplikasi tidak dapat berjalan dengan benar jika ada data yang dolah tidak sesuai engan kebutuhan aplikasi.
- melindungi akun pengguna, misalnya membuat pengguna untuk memasuka data password yang aman.
melingungi sistem/aplikasi 

Pada hari senin,rabu,dan jumat, saya mmepelajari materi tentang Global State Management and Data fetching 


REDUX

----Kapan saat yang tepat untuk menggunakan Redux ?---
- Banyak state yang perlu ditaruhdi banyak tempat
- State pada App sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

REDUX LIBRARIES AND TOOLS
- React-Redux
- Redux Toolkit
- Redux DevTools Extension

KOMPONEN PENTING DI REDUX
- Actions
- Reducer
- Store


#ACTION#
Digunakan untuk memberikan informasi dari aplikasi react kita ke Redux store

const addTodoAction = {
    type: 'todos/todoAdded',
    playload: 'Buy milk'
}


const addTodo = text {
    return {
        type: 'todos/todoAdded',
        payload: text
    }
}

const increment = "( ) => {
    return {
        type: 'counter/incerment.
    }
}

#REDUCER#
Pure JavaSript function yang mengambil state saat ini dan object action lalu mengembalikan state apl terbaru

CONTOH

const initial = {
    function counterReducer(state = initialState, action) {
        if (action.type === 'counter/incremenr ') {

            return {
                ...state,
                value: state.value + 1
            }

        })
    }
}

expore return state


#REDUCER#
Pure JavaSript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikanstate aplikasi terbaru

CREATE Slice(1)

import { createSlice } from'@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter'
    initialState: (
        iValue: 0
    ),
    reducers: (
        incremment: state => {
            state.value += 1
        },
        incrementByAmount: state, action =>{
            state.value += action.playoad
        }
    )
})

export const {increment, decrement, incremenrByAmount} = counterSlice.action
export default counterslice, reducer 


#STORE#
Objek sentral yang menyimpan state pada aplikasi

import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
//{value: 0}


==MEMASANG REDUX STORE PADA REACT==

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider} from 'react-redux'

ReactDOM.render(
    <provider store = {store}
    <App />
    </provider>,document.getElementById ('root')
)



MEMAKAI DAN MENGUBAH STATE 

==MENGGUNAKAN HOOKS==

import React from './react'
import { useSelector, useDispatch } from 'react-redux 
import { increment } from './counterSlice'
import styles from './counter.module,css'

export function Counter() {
    const count = useSelector(state.conter.value)
    const dispatch = useDispatch ()

    return (
        <div>
        <div>
        <Button
        aria-label="Increment Value"
        onCluck={() => dispatch (increment())}
        >
        Increment
        </Button>
        <span>{count}</spam>
        </div>
        </div>
    )
}


#CONNET#
1. mapStateToProps?: Function
2. mapDispatchToProps?: Function | object
3. mergeProps?: Function
4. Option?:Object



import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return mapStateToProps = (state) => {
        count: state.counter.value
    }
}

const mapDispatchToProps ={
    increment, 
}

export default connect (mapStateToProps)(Counter)
})


HASURA :
- Membuat Account HASURA
- Pengenalan component-component di HASURA
- Set up Hasura 
- Latihan Membuat Rest

POSTMAN
- Memuat Account Postman
- Pengenalan component-component yang ada di postman 
- Set up Postman
- Latihan Membuat Workspace

MOCKAPI
- Membuat Account MockAPI
- Pengenalan component-component yang ada di MockAPI
- Set up MockApi
- Membuat Project Artikel

Lalu setelah itu semua materi ini saling dihunungkan, HASURA, dan MockAPI ditautkan kedalam PostMan




Pada hari senin tanggal 10 oktober 2022 saya mempelajari materi tentang TESTING.

Testing adalah proses memvertivikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai kecuali ada bug di kode kita. misalkan kita memiliki halaman login, kita akan memastikan bahwa halaman itu benar benar berjalan dengan aman.

ada beberapa manfaat testing.

walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut : 
- ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test). kita akan merasa percaya diri, jika harus mengubah suatu bagian pada aplikasi kita.Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- mengurangi buy pada aplikasi. walauoun testing tidak menjamin aplikasi kita bebas bug, tetapi kiat bisa mencegah beberapa hal yang berpotensi menjadi bug.

Secara umum, cara mengetes di React terbagi menjadi dua kategori :
1. Rendering component trees, di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli, ini dikenal sebagai tes "end-to-end".

==== PERTIMBANGAN MEMILIH PERKAKAS ====

[ Kecepatan iterasi vs environment yang realistis ]

Beberapa kakas menawarkan feedback loop yang sangan cepat antaea membuat sbeuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mengurangi kecepatan iterasi dan lebih flakiernpada server integrasi berkelanjutan.

[ Seberapa Banyak Mock ]
 Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? atau haruskah komponen memiliki rangkaian tes sendiri? haruskah refactoring pada tombol merusak tes pada form?

 pertimbangan pemilihan perkakas untuk testing temtu saja dikembalikan kepada kebutuhan masing-masing.

 [ Jest ]

 Test runner pada JavaScript yang memungkinkan anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan carakerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga anda dapat memiliki kontrol lebih pada kode yang dijalankan.

 // math.js

 Function sum(x, y) {
    return x + y;
 }

 import sum from './math.js';

 describe('sum', () => {
    test('sums up two values', () => 
    {
        expect(sum(2, 4)). toBe(6);
    });
 });



[ React Testing Library / RTL ]
Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring ini membuat refactoring menjadi mudah dan juga mendorong kita untuk memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti jest yang memungkinkan kita melakukan mocking.

[ Install ]

Jika kita menginstall React menggunakan create-react-app, jest (dan React Test Library ) akan secara default sudah terinstall. Tetapi jika kita menggunakan cosutm React setup, kita perlu menginstall dan men set up jest ( dan react Testing Library).

=== CREATE BASIC TESTING WITH RTL ===

[ Rendering Component ]

Sebelum kita mengetes suatu komponent atau file di React, kita perlu terlebih dahulu merender file/ component tersebut terlebih dahulu kedalam testing kita. 

fUNGSI RENDER RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React hyang akan kita test. untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan funfsi debug RTL. Selalu gunakan fungsi denug RTL apalagi kita tidak yakin seperti apa hasil dari fungsi render RTL.

React Testing Library digunakan untuk berinteraksiu dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

==================================
 import React from 'react';

 const title = ' Hello React';

 funstion App() {
    return <div>{title}</div>;
 }

 export default App;

 ===================================

 import React from 'react';
 import { render, screen } from '@testing-library/react';

 import App from './App':

 describe('App', () => {
    render(<App/>)

    screen debug();
 });
 });


Pada hari Rabu tanggal 12 oktober 2022 saya mempelajari materi tentang Deploymeny, dimana di dalam materi itu saya mempelajar beberapa maeri sebagai berikut :

=== BUILD REACT ===

Kenapa Perlu Build ?

Secara default, React mengandung banyak pesan peringatan. peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namn,pesan-pesan ini membuat react menjadi lebih besar dan lambat. oleh karenanya kita harus menggunakan versi produksi ketika men-delay aplikasi.
Tujuan melakukan build aagr aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.

=== BUILD REACT APP ===

Karena proyek kita dibangun menggunakan Create React App,

npm run build

ini akan membuat versi produksi untuk aplikasi kita kedalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

jadi setelah kita menjalankan npm run build, drag akan melakukan build pada aplikasi kita, dia akan membuat optimize production build, setelah dia selesai dia akan memberitahukan kepada kita bahwa filenya itu sudah ada di build folder, jadi kita sudah bisa mengakses folder build kita.

Brtikut adalah contohnya

Karya-Air:react-exercise karyadi$ npm run build

>react-exercise@0.1.0 build
> react-scripts build

creating an optimized production build complited successfully.

File size after gzip:

    41.91 KB build/static/js/2.af48e8bf.chunk.js
    1.63 KB Build/static/js/3.932118f8.chunk.js
    1.54 KB Build/static/js/main/1d61fc09.chunk.jd
    1/17 KB build/static/js/runtime-main.4ac1128d.js
    1/17 KB build/static/js/main.cebb6178d.js
    1/17 KB build/static/js/main.eebb61f6.chunk.css

The project was built assuming it is hosted at /. you can control this with the homepage field in your packaghe.json.

The build folder is ready to be deployed.
You may serve it with a static server.

    npm install -g serve
    serve -s build

    find out more about daployment here:

    https://cra/link.deployment


=== DEPLOYMENT ===


 Summary Tugas Relational Database :

# 1.Relational database adalah kelompok item dalam data dengan hubungan yang sudah ditentukan sebelumnya. Umumnya item ini disusun menjadi tabel yang terdiri dari kolom dan baris. Tabel dipakai untuk menyimpan informasi objek yang direpresentasikan dalam database. Kolom dalam tabel memuat data tertentu dan nilai atribut. Baris pada tabel menunjukkan kumpulan nilai dari satu objek. Tiap baris pada tabel dapat ditandai secara unik atau dalam bentuk ID. Ini kerap disebut kunci utama.

# 2.Kelebihan Relational Database diantaranya:
# a.Sederhana
# Database ini cukup sederhana dan tidak membutuhkan hierarki data yang sangat kompleks untuk membuatnya. Bahkan, data yang ada bisa dengan mudah ditangani oleh SQL query.
# b.Mudah diakses
# Tidak ada aturan khusus yang dibuat untuk bisa mengakses semua data yang sudah dibuat dalam bentuk tabel. Dalam relational database siapa pun bisa mengakses dengan mudah dan cepat.Bahkan, mereka bisa melakukan modifikasi seperti menggabungkan tabel atau data terkait dengan lebih cepat.
# c. Akurasi data tinggi
# Saat menggunakan relational database, kita akan menggunakan kunci utama dan kunci asing. Hadirnya dua kunci untuk melakukan seleksi ini membuat dua data yang berhubungan satu sama lain tidak mengalami duplikasi. Karena dalam relational database apa pun yang sama akan ditampilkan sekali saja. Jadi, akurasi datanya menjadi lebih tinggi.

# 3.Beberapa contoh Relational Database sebagai berikut :
# a.MySQL
# MySQL adalah sebuah sistem untuk manajemen basis data relasional. Banyak sekali produk-produk IT yang dibuat dengan menggunakan komponen utama MySQL. Beberapa aplikasi seperti WordPress, Google, Flickr, Youtube, Facebook, Joomla, phpBB, Drupal, dan MODx menggunakan sistem ini untuk manajemen basis data relasional mereka.

# b.PostgreSQL
# Sistem kedua yang merupakan sistem pengelolaan basis data relasional adalah PostgreSQL. Sistem ini berfungsi untuk menyimpan data secara aman dan dapat mengembalikan data tersebut sebagai respon atas request dari aplikasi lainnya. PostgreSQL dapat bekerja melalui aplikasi mesin tunggal kecil hingga aplikasi internet besar beserta pengguna yang banyak secara bersamaan. Sistem ini biasa digunakan pada sistem operasi mac OS server, karena pengaturannya sudah tersedia secara default. Sistem operasi lainnya seperti Windows dan Linux juga dapat ditemukan dengan mengubah pengaturannya.

# c.MariaDB
# MariaDB adalah sistem yang dikembangkan dari MySQL. Pengembangan ini bertujuan untuk mempertahankan kompatibilitas yang tinggi dari MySQL dan cocok dengan API MySQL beserta perintah-perintahnya. MariaDB memiliki mesin penyimpanan XtraDB untuk mengganti InnoDB. Sistem ini dikembangkan langsung oleh beberapa pengembang asli MySQL dengan pihak yang bercabang. Tujuannya adalah agar tidak diakuisisi oleh Oracle Corporation yang merupakan kompetitornya.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



