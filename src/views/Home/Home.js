import React, { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom';
import axios from 'axios';
import EditProduct from './../EditProduct/EditProduct';

import './Home.css';

function Home() {

  const [data, setData] = useState([])

  const loadData = async () => {
    const response = await axios.get("/products")

    setData(response?.data?.data);

  }

  const DeleteProduct = async (_id) => {
    const response = await axios.delete(`/product/${_id}`)
    alert(response?.data?.message)
    loadData()
  }


  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div className='d-flex'>
        {

          data?.map((student, i) => {
            const { _id, image, title, description, price, brand } = student;

            return (
              <div key={i} className='card-data'>
                <img src={image} className='img-data' />
                <h2>{title}</h2>
                <p> {description} </p>
                <button onClick={() => {
                  DeleteProduct(_id)
                }}>delete</button>


                <button onClick={() => {
                  window.open(`/EditProduct/${_id}`, `_blank`)
                }} > Edit</button>


                <p className='price'>RS ₹{price} Brand: {brand}</p>


                <button className='btn-more' onClick={() => {
                  window.open(`/MoreDetails/${_id}`, `_blank`)
                }}> More Details</button>

                
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
