import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css';

function Home() {

    const [data, setData] = useState([
        
       
    ])

    const loadData = async ()=>{
        const response = await axios.get("/products")

      setData(response.data.data);
    }

    useEffect(()=>{
      loadData()
    },[])


  return (
    <>
    <div>
      <h1>Home</h1>
    </div>
    <div className='d-flex'>
      {
        data.map((student, i) => {
            const {image, title, description, price, brand} = student;

            return(
                <div key={i} className='card-data'>
                   <img src={image} className='img-data' />
                    <h2>{title}</h2>
                    <p> {description} </p>
                    <p>RS ₹{price} Brand: {brand}</p>
                </div>
            )
        })
      }
      </div>
    </>
  )
}

export default Home
