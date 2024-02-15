<<<<<<< HEAD
import React, { useContext, useEffect } from 'react'
import Style from './Product.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Cart'
import {Helmet} from "react-helmet";
import toast from 'react-hot-toast';
import { Wish } from '../../Context/WishList'
export default function Product() {

const {addToCart,setCount,displayCart} = useContext(CartContext)



// WishList
const {addWishList,removeWishProduct} = useContext(Wish)

async function addWish(id){
    const {data} = await addWishList(id)
    if(data.status === 'success'){
        toast.success(data.message)
    }
    
}

async function removeWish(id){
    const {data} = await removeWishProduct(id)
    console.log(data)
}




//End WishList

async function dataCount(){
    const response= await displayCart()
     setCount(response.data?.numOfCartItems)

}

useEffect(()=>{
    dataCount()
},[])

 async function addProductToCart(id){

    const response = await addToCart(id)
    if(response.data.status === 'success'){
        toast.success(response.data.message)

        setCount(response.data.numOfCartItems)
    }else{
        toast.error(response.data.message)
    }
 }

    function getProducts(){

        return axios.get('https://ecommerce.routemisr.com/api/v1/products').then((response)=>response).catch((error)=>error)
    }
    const {data,isLoading} = useQuery('Products',getProducts,{
        cacheTime:250000
    })

  return <>
    <Helmet>
                <title>Products</title>

            </Helmet>
  
  {isLoading ? <div className="w-100 d-flex justify-content-center align-items-center">
  <i className="fa-solid fa-spinner fs-1 text-main"></i>
  </div> :<>
  
    <div className="row m-0">
        {data?.data.data.map((product,index)=>{
            return <div key={index} className="col-md-3" >
              <div className="box product rounded" role='button'>
              <Link to={`productdetails/${product.id}`}>
           <img src={product.imageCover} className='w-100' alt={product.title}/>
       <div className="product-info p-3 pb-0">
       <h3 className='h6 fw-bolder mb-3 text-main'>{product.category.name} </h3>
            <h3 className='h6 fw-bolder'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
            <div className="price-rating d-flex justify-content-between">
                <span className='fw-bold'>{product.price} EGP</span>
                <span><i className="fa-solid fa-star rating-color"></i>{product.ratingsAverage} </span>
            </div>
          
       </div>
                </Link>
                <div className='px-3'>
         <i onClick={function(ev){ return  ev.target.classList.toggle('text-danger'),
addWish(product.id),localStorage.setItem('heart','text-danger')
}} className="wishHeart fa-solid fa-heart fs-2 my-2"></i>             

                  <button onClick={()=> addProductToCart(product.id)}  className='btn w-100 bg-main text-light mb-3'>+ Add</button>
                </div>
     
            </div>
              </div>
      

        })}
    </div>
  </>
  }
 
  </>
}

=======
import React, { useContext, useEffect } from 'react'
import Style from './Product.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Cart'
import {Helmet} from "react-helmet";
import toast from 'react-hot-toast';
import { Wish } from '../../Context/WishList'
export default function Product() {

const {addToCart,setCount,displayCart} = useContext(CartContext)



// WishList
const {addWishList,removeWishProduct} = useContext(Wish)

async function addWish(id){
    const {data} = await addWishList(id)
    if(data.status === 'success'){
        toast.success(data.message)
    }
    
}

async function removeWish(id){
    const {data} = await removeWishProduct(id)
    console.log(data)
}




//End WishList

async function dataCount(){
    const response= await displayCart()
     setCount(response.data?.numOfCartItems)

}

useEffect(()=>{
    dataCount()
},[])

 async function addProductToCart(id){

    const response = await addToCart(id)
    if(response.data.status === 'success'){
        toast.success(response.data.message)

        setCount(response.data.numOfCartItems)
    }else{
        toast.error(response.data.message)
    }
 }

    function getProducts(){

        return axios.get('https://ecommerce.routemisr.com/api/v1/products').then((response)=>response).catch((error)=>error)
    }
    const {data,isLoading} = useQuery('Products',getProducts,{
        cacheTime:250000
    })

  return <>
    <Helmet>
                <title>Products</title>

            </Helmet>
  
  {isLoading ? <div className="w-100 d-flex justify-content-center align-items-center">
  <i className="fa-solid fa-spinner fs-1 text-main"></i>
  </div> :<>
  
    <div className="row m-0">
        {data?.data.data.map((product,index)=>{
            return <div key={index} className="col-md-3" >
              <div className="box product rounded" role='button'>
              <Link to={`productdetails/${product.id}`}>
           <img src={product.imageCover} className='w-100' alt={product.title}/>
       <div className="product-info p-3 pb-0">
       <h3 className='h6 fw-bolder mb-3 text-main'>{product.category.name} </h3>
            <h3 className='h6 fw-bolder'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
            <div className="price-rating d-flex justify-content-between">
                <span className='fw-bold'>{product.price} EGP</span>
                <span><i className="fa-solid fa-star rating-color"></i>{product.ratingsAverage} </span>
            </div>
          
       </div>
                </Link>
                <div className='px-3'>
         <i onClick={function(ev){ return  ev.target.classList.toggle('text-danger'),
addWish(product.id),localStorage.setItem('heart','text-danger')
}} className="wishHeart fa-solid fa-heart fs-2 my-2"></i>             

                  <button onClick={()=> addProductToCart(product.id)}  className='btn w-100 bg-main text-light mb-3'>+ Add</button>
                </div>
     
            </div>
              </div>
      

        })}
    </div>
  </>
  }
 
  </>
}

>>>>>>> adc6bc5 (e-commerce)
