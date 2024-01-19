import React from 'react';
import './index.css'

const BannerCardItem = (props) => {
    const {bannerCardsList} =props;
    const {headerText,description,className,key}=bannerCardsList;

      return(
        <li className='list-container'>
            <div className={className}>
                <div class="text-container">
                    <h1 className='text-heading'>{headerText}</h1>
                    <p className='text-para'>{description}</p>
                    <button className='text-btn'>Show More</button>
                </div>
            </div>
        </li>
        
      )
  };


export default BannerCardItem;
