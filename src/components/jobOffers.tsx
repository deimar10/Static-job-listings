import React, { useState } from 'react';
import './JobOffers.css';
import { JobInterface } from '../Interface/interface';
import Filterbar from './Filterbar';

function JobOffers ({jobData}: any) {

    const [filterbar, setFilterbar] = useState(false);

    const handleFilter = () => {
        setFilterbar(true);
    }

    return (
        <div>
            <Filterbar />
            {jobData && jobData.map((offer: JobInterface) => {
                return (
                    <div className='job-main-container' key={offer.id} style={{
                        borderLeft: offer.featured ? '6px solid hsl(180, 29%, 50%)' : '0px'
                    }}>
                    <div className='job-main-container-left'>
                    <div className='job-image-container'>
                        <img src={offer.logo} />
                    </div>
                    <div className='job-details-container'>
                    <div className='job-info-container'>
                        <h3>{offer.company}</h3>
                       {offer.new ? <label id='label-new'>NEW!</label> : null}
                       {offer.featured ?  <label id='label-featured'>FEATURED</label> : null}
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
                        <button onClick={handleFilter}>Frontend</button>
                        <button onClick={handleFilter}>Senior</button>
                        <button onClick={handleFilter}>HTML</button>
                        <button onClick={handleFilter}>CSS</button>
                        <button onClick={handleFilter}>JavScript</button>
                    </div>
                    </div>
                    </div>
                );
            })}
        </div>
    )
}

export default JobOffers;