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
