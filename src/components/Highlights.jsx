import React from 'react'
import './Highlights.css'
import Project from '../images/highlights.png'

export const Highlights = () => {
  return (
    <div className='highlights_container'>
        <div className="highlights_main">
            <div className="highlight_image">
               <img src={Project} alt="" />

            </div>
            <div className="highlight_content">
                <h1>Project Highlights</h1>
                <h2>Near To School</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laudantium minus ab id nesciunt debitis animi, doloremque illum nostrum sapiente.</p>


            </div>

        </div>

    </div>
  )
}
