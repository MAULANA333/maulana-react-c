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
