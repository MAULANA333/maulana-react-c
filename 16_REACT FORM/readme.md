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