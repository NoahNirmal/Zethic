import React from 'react'
import './Collection.css'
import {BsArrowRight}from 'react-icons/bs'
import {GiCrossMark} from 'react-icons/gi'

export const Collection = () => {
  return (
    <div className='collection_Container'>
        <div className="collection_main">
        <div className="Explore_Container">
            <h1>Explore your Collections</h1>
            <hr />
            <p><GiCrossMark /> <i>Boundrys Walls</i></p>
            <hr />


        </div>
        <div className="Collection_images">
            
                <div className="Images_one">
                  <img src="https://mediacdn.99acres.com/media1/17134/7/342687478T-1643879394272.jpeg" alt="" />

                </div>
                <div className="Images_one">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3n8htLsiRaBzBtgZdqAwgBFrLfkFau1lFI47ikFtqgA9vn9F0Ek8LToGLSSOPq1LSajU&usqp=CAU" alt="" />
                    
                </div>
                <div className="Images_one">
                  <img src="https://newprojects.99acres.com/projects/unknown/pariwars_anugraha_residential_layout/images/q63120jf.png" alt="" />
                    
                </div>

            

        </div>

        </div>
        <h4><span> <BsArrowRight /> </span>Explore more</h4>


    </div>
  )
}
