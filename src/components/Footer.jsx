import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer_Container'>
        <div className="footer_main">
            <div className="footer_left">
            <div className="footer_logo">
                <h1>Discover Plots</h1>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="footer_Right">
                <div className="footer_Right_main">
                    <div className="footer_main_left">
                        <h3>company</h3>
                        <p>contact</p>
                        
                    </div>
                    <div className="footer_main_middle">
                    <h3>company</h3>
                        <p>Customers</p>
                        <p>Brokers</p>
                        <p>Lenders</p>
                        
                    </div>
                    <div className="footer_main_right">
                    <h3>company</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        
                    </div>

                </div>

            </div>
         
            

        </div>
        <div className="footer_copyright">
            <p>Copyright@2023 City Plots</p>
            <div className='privacy_container'>
                <span>Privacy Policy</span>
                <span>- Privacy collection Notice </span>
                <span>-Terms</span>


            </div>

        </div>
    </div>
  )
}
