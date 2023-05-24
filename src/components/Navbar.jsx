import React from 'react'
import'./Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar_Container'>
        <div className="logo">
            <h2>Discover Plots</h2>

        </div>
       <div className="navbar_links">
        <ul>
            <li><select>
                <option value="">Projects</option>
                </select></li>
                <li>Agents</li>
                <li>Amenities</li>
                <li><p>|</p></li>
                 <li> Sign in</li>
                 <li><button>Schedule a Call</button></li>
        </ul>

       </div>

    </div>
  )
}
