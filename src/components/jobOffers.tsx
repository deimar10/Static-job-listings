import React from 'react';
import './jobOffers.css';
import tere from '../images/myhome.svg';

function jobOffers ({jobData}: any) {
    return (
        <div>
            <div className='job-main-container'>
            <div className='job-main-container-left'>
            <div className='job-image-container'>
                <img src={tere} />
            </div>
            <div className='job-details-container'>
            <div className='job-info-container'>
                <h3>Photoshop</h3>
                <label id='label-new'>NEW!</label>
                <label id='label-featured'>FEATURED</label>
            </div>
            <div className='heading-section'>
                <h2>Senior Frontend Developer</h2>
            </div>
            <div className='job-date-container'>
                <p>1d ago</p>
                <p>Full Time</p>
                <p>USA only</p>
            </div>
            </div>
            </div>
            <div className='job-main-container-right'>
            <div className='job-filter-container'>
                <button>Frontend</button>
                <button>Senior</button>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavScript</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default jobOffers;