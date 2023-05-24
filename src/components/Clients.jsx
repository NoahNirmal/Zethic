import React from 'react'
import './Clients.css'
import {AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


export const Clients = () => {
    return (
        <div className='clients_container'>
            <div className="clients_main">
                <h1>Clients Testimonial</h1>
                <div className="clients_videos">
                    <div className="client_video_one">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TLBy0gIoiGH8R_t-xVMrt2u4C8OLg2GZEyGIkcFUxsfdlEpN3ktYZZ75yjwUtE70bGs&usqp=CAU" alt="" />


                    </div>
                    <div className="client_video_two">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDxUbXzOgxer6_LJo9PBmzHsgsmb-vu4hug&usqp=CAU" alt="" />

                    </div>
                    <div className="client_video_three">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTvNTHh3RdefN1uYrgSmEvEymPJV3r-qvaw&usqp=CAU" alt="" />

                    </div>

                </div>
                <div className="Feature_arrowBtns">
            <div className="f_arrowbutton white"><AiOutlineLeft /></div>
            <div className="f_arrowbutton white"><AiOutlineRight /></div>

            </div>

            </div>
        </div>
    )
}
