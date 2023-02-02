import React from 'react';
import './jobOffers.css';
import { JobInterface } from '../Interface/interface';

function jobOffers ({jobData}: any) {

    console.log(jobData)

    return (
        <div>
            {jobData && jobData.map((offer: JobInterface) => {
                return (
                    <div className='job-main-container' key={offer.id}>
                    <div className='job-main-container-left'>
                    <div className='job-image-container'>
                        <img src={offer.logo} />
                    </div>
                    <div className='job-details-container'>
                    <div className='job-info-container'>
                        <h3>{offer.company}</h3>
                        <label id='label-new'>NEW!</label>
                        <label id='label-featured'>FEATURED</label>
                    </div>
                    <div className='heading-section'>
                        <h2>{offer.position}</h2>
                    </div>
                    <div className='job-date-container'>
                        <p>{offer.postedAt}</p>
                        <p>{offer.contract}</p>
                        <p>{offer.location}</p>
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
                );
            })}
        </div>
    )
}

export default jobOffers;