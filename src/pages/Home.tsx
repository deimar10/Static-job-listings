import React from 'react';
import './Home.css';
import JobOffers from '../components/jobOffers';
import Illustration from './bg-header-desktop.svg';

function Home ({jobData}: any) {
    return (
        <div>
            <div className='image-container' style={{
                backgroundImage: `url(${Illustration})`
            }}>
            </div>
            <div className='job-offers-container'>
                <JobOffers jobData={jobData} />
            </div>
        </div>
    )
}

export default Home;