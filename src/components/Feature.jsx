import React from 'react'
import'./Feature.css'
import { Cards } from './Cards'
import {AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const Feature = () => {
  return (
    <div className='feature_container'>
        <div className="feature_container_main">
            <h1>Feature Projects</h1>

            <div className="featur_btn_container">
            <div className="Feature_btns">
                <div className="f_button orange">Egmore</div>
                <div className="f_button white">Koyambedu</div>
                <div className="f_button white">Sholinganallur</div>
                <div className="f_button white">Choolaimedu</div>
                <div className="f_button white">Greams Roads</div>
                <div className="f_button white">Royapettah</div>
                


            </div>
            <div className="Feature_arrowBtns">
            <div className="f_arrowbutton white"><AiOutlineLeft /></div>
            <div className="f_arrowbutton white"><AiOutlineRight /></div>

            </div>
            </div>

            <div className="cards_Container">
{/*                 
            <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
               */}
                <Cards src="https://squareacre.in/wp-content/uploads/elementor/thumbs/Bda-Approved-Plots-for-Sale-in-Bhubaneswar-Odisha-phxatxks82cw9ixaqgy990u29xffd7wxqjdrzgiu7w.jpg"/> 
                <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5DhbIPens0P9Ac0jfrxUsIvwcUJeVr8n4yewVp29LzUaSYlFUeepcMk2XlCABwqZM1E&usqp=CAU"/>
                <Cards src="https://mediacdn.99acres.com/media1/19900/7/398007848M-1671539407895.jpg"/>
                <Cards src="https://is1-2.housingcdn.com/01c16c28/1b5c44f01cfe5322112071c01abf3eb9/v0/fs/residential_plot-for-sale-soso_1-Ranchi-plot_view.jpg" />

            </div>
          

        </div>

    </div>
  )
}
