import React from 'react'
import './Discover.css'

export const Discover = () => {
  return (
    <div className='discover_container'>
        <div className="Discover_UpperContainer">
            <div className="Discover_imageContainer">
                <img src="https://img.freepik.com/premium-photo/land-plot-management-real-estate-concept-with-vacant-land-green-field-available-building-construction-housing-subdivision-residential-area-sale_43780-6335.jpg" alt="" />

            </div>
            <div className="Discover_searchContainer">
                <div className="searchConatiner_heading">
                <h1>Discover Your Perfect Plot of Land</h1>
                </div>
                <p>Starting at</p>
                <h2>₹ 3999<small>per.Sqft</small></h2>
                <div className="input_Container">
                    <input type="text" placeholder='Search area or location'/>
                    <select name="" id="">
                        <option value="">₹ Budget</option>
                    </select>

                    <button>Search</button>

                </div>
               
                
            </div>

        </div>

        <div className="Discover_lowerContainer">
            <div className="Discover_lowerleft">
                <div className="landmark_container">
                    <div className="landmark_upper">
                        <h1>340K+</h1>
                        <p>Landmark Near Chennai</p>


                    </div>
                    <div className="landmark_lower">
                        <div className="Customer">
                        <h1>437K+</h1>
                        <p>Happy Customers</p>

                        </div>
                        <div className="Customer">
                        <h1>4.3m+</h1>
                        <p>Sq.Feet developed</p>

                        </div>

                        

                    </div>

                </div>

                <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aperiam nobis praesentium.</i>

            </div>

            <div className="Discover_lowerRight">
                <p>❤️ Trending Projects</p>
                <div className="lowerright_images">
                    <div className="lowerRight_images_one">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5DhbIPens0P9Ac0jfrxUsIvwcUJeVr8n4yewVp29LzUaSYlFUeepcMk2XlCABwqZM1E&usqp=CAU" alt="" />
                        
                    </div>
                    <div className="lowerRight_images_two">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbfnSZkPjeUDYytD5K-k0Lrh2_wlZ00AFbjohEg8d7VA44jW97ockSYgXCC1Q0_eU5X4&usqp=CAU" alt="" />
                        
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}
