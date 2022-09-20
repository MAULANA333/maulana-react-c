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
