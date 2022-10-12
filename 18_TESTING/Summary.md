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
