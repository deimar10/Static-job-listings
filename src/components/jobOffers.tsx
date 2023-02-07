import React, { useState } from 'react';
import './JobOffers.css';
import { JobInterface } from '../Interface/interface';
import Filterbar from './Filterbar';

function JobOffers({ jobData }: any) {
    interface FilterInfo {
        role: string,
        level: string,
        language: string[],
        tools: string[]
    };

    const [filterbar, setFilterbar] = useState<boolean>(false);
    const [filterInfo, setFilterInfo] = useState<FilterInfo>({
        role: '',
        level: '',
        language: [],
        tools: []
    });

    const handleFilter = (offer: JobInterface) => {
        setFilterInfo({ ...filterInfo, role: offer.role, level: offer.level});

        setFilterbar(true);
    }

    const handleLanguages = (offerLanguages: string) => {
        setFilterInfo({ ...filterInfo, language: [...filterInfo.language, offerLanguages]});

        setFilterbar(true);
    }

    const handleTools = (offerTools: string) => {
        setFilterInfo({ ...filterInfo, tools: [...filterInfo.tools, offerTools]});

        setFilterbar(true);
    }

    const handleFilterOffers = () => {
        let filteredOffers = jobData;

        if (filterInfo.role !== '') {
            filteredOffers = filteredOffers.filter((offer: JobInterface) => offer.role === filterInfo.role);
        }

        if (filterInfo.level !== '') {
            filteredOffers = filteredOffers.filter((offer: JobInterface) => offer.level === filterInfo.level);
        }

        if (filterInfo.language.length !== 0) {
            filteredOffers = filteredOffers.filter((offer: JobInterface) => offer.languages.some((lang) => filterInfo.language.includes(lang)));
        }
          
        if (filterInfo.tools.length !== 0) {
            filteredOffers = filteredOffers.filter((offer: JobInterface) => offer.tools.some((tool) => filterInfo.tools.includes(tool)));
        }
          
        return filteredOffers;
    };    
      
      const handleProcessedOffers = () => {
        let processedOffers = handleFilterOffers();
      
        return processedOffers;
      };
      
      const processed = handleProcessedOffers();
    return (
        <div>
            {filterbar ? 
            <Filterbar 
            filterInfo={filterInfo} 
            setFilterInfo={setFilterInfo} 
            setFilterbar={setFilterbar} 
            /> : null 
            }
            {processed && processed.map((offer: JobInterface) => {
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
                    <button onClick={e => handleFilter(offer)}>{offer.role}</button>
                    <button onClick={e => handleFilter(offer)}>{offer.level}</button>
                        {offer.languages.map((offerLanguages: string) => {
                            return (
                                <div>
                                    <button onClick={e => handleLanguages(offerLanguages)}>{offerLanguages}</button>
                                </div>
                            )
                        })}
                        {offer.tools.map((offerTools: string) => {
                        return (
                            <div>
                                <button onClick={e => handleTools(offerTools)}>{offerTools}</button>
                            </div>
                            );
                        })}
                    </div>
                    </div>
                    </div>
                );
            })}
        </div>
    )
}

export default JobOffers;