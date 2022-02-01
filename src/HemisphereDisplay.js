import React from 'react';
import NorthernPic from './image/NorthernHemisphere.jpeg';
import SorthernPic from './image/SouthernHemisphere.jpeg';
import './Hemisphere.css';

const hemispherConfig = {
    Northern: {
        text: ' It is Northern Hemisphere',
        picture: NorthernPic

    },
    Southern: {
        text: 'It is Southern Hemisphere ',
        picture: SorthernPic

    }
}

const HemisphereDisplay = ({ latitude }) => {
    // console.log(latitude);
    // javascript ternary operatore
    const hemispher = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemispherConfig[hemispher]

    return (
        <div>
        <div className={hemispher}>
            <div className='ui raised text container segment '>
                <div className='image'>
                    <img src={picture} alt="hemispher picture" ></img>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>
                        {text}
                    </h1>
                </div>

            </div>
<h1> Text </h1>
        </div>
        </div>
      
    )
}
export default HemisphereDisplay