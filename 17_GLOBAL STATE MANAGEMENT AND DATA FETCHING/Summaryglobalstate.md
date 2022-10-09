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


