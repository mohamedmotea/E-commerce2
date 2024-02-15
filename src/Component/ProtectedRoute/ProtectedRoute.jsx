<<<<<<< HEAD
import React from 'react'

import { Navigate } from 'react-router-dom'
export default function ProtectedRoute(props) {


    if(localStorage.getItem('userToken') !==null){
        return props.children
    }else{
        return <Navigate to={'/signIn' }/>
    }


}
=======
import React from 'react'

import { Navigate } from 'react-router-dom'
export default function ProtectedRoute(props) {


    if(localStorage.getItem('userToken') !==null){
        return props.children
    }else{
        return <Navigate to={'/' }/>
    }


}
>>>>>>> adc6bc5 (e-commerce)
