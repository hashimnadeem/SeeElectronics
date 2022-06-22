import React from 'react'
import image1 from '../images/electricscooters.jpeg'
import image2 from '../images/Gaming.jpeg'
import image3 from '../images/laptop.jpeg'
import image4 from '../images/SmartWatch.jpeg'
import image5 from '../images/tv.png'
import image6 from '../images/wifi.webp'
import './categories.css'
import { Link, Routes, Route } from 'react-router-dom'
import Electric from './electric_scooters'

const title1 = "Electric Scooters", title2 = "Gaming", title3 = "Laptops",
title4 = "Smart Watches", title5 = "TV", title6 = "Wifi";

/* const data = [
  {
    id: 1,
    image: image1,
    title: "Electric Scooters"
  },{
    id: 2,
    image: image2,
    title: "Gaming"
  },{
    id: 3,
    image: image3,
    title: "Laptops"
  },{
    id: 4,
    image: image4,
    title: "Smart Watches"
  },{
    id: 5,
    image: image5,
    title: "TV"
  },{
    id: 6,
    image: image6,
    title: "Wifi"
  }
]*/
const categories = () => {
    
  return (
    
    <div className="container categories_container">
      
        
        
          
          
          
          <Link to="/electricscooters">
            <div className="category">
              <div className="category_image">
                <img src={image1} alt={title1} />
              </div>
              <div className="category_title">
                {title1}
              </div>
            </div>
            
          </Link>
          
          <Link to="/contact">
            <div className="category">
              <div className="category_image">
                <img src={image2} alt={title2} />
              </div>
              <div className="category_title">
                {title2}
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div className="category">
              <div className="category_image">
                <img src={image3} alt={title3} />
              </div>
              <div className="category_title">
                {title3}
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div className="category">
              <div className="category_image">
                <img src={image4} alt={title4} />
              </div>
              <div className="category_title">
                {title4}
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div className="category">
              <div className="category_image">
                <img src={image5} alt={title5} />
              </div>
              <div className="category_title">
                {title5}
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div className="category">
              <div className="category_image">
                <img src={image6} alt={title6} />
              </div>
              <div className="category_title">
                {title6}
              </div>
            </div>
          </Link>

          <Routes>
            <Route path="/electricscooters" element={<Electric />}/>
          </Routes>
      
      </div>
      
      
    
  )
}

export default categories