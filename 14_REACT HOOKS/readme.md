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

    