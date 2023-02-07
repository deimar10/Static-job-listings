import React, {useEffect, useState} from "react";
import './Filterbar.css'


function Filterbar ({filterInfo, setFilterInfo, setFilterbar}: any) {
    interface FilterInfo {
        role: string,
        level: string,
        language: string[],
        tools: string[]
    };

    const handleCloseFilter = () => {
        setFilterbar(false);
        setFilterInfo({
            role: '',
            level: '',
            language: [],
            tools: []
        });
    }

    const handleDeleteRole = () => {
        setFilterInfo({...filterInfo, role: ''});
    }

    const handleDeleteLevel = () => {
        setFilterInfo({...filterInfo, level: ''});
    }

    const handleDeleteLanguages = (offerLanguages: string) => {
        setFilterInfo((prevFilterInfo: FilterInfo) => {
            const updatedLanguages = prevFilterInfo.language.filter((offer: string) => offer !== offerLanguages);
            return { ...prevFilterInfo, language: updatedLanguages };
        });
    };

    const handleDeleteTools = (offerTools: string) => {
        setFilterInfo((prevFilterInfo: FilterInfo) => {
            const updatedTools = prevFilterInfo.tools.filter((offer: string) => offer !== offerTools);
            return { ...prevFilterInfo, tools: updatedTools };
        });
    };
    
    useEffect(() => {
        if (filterInfo.language.length === 0 && filterInfo.tools.length === 0 && filterInfo.role === '' && filterInfo.level === '') {
            setFilterbar(false);
        }
    }, [filterInfo.language, filterInfo.tools, filterInfo.role, filterInfo.level]);

    return (
        <div className='filterbar'>
        <div className='filterbar-left'>
            <div>
            {filterInfo.role ? <span id='remove-filter'>{filterInfo.role}<button onClick={handleDeleteRole}>X</button></span> : null}
            {filterInfo.level ? <span id='remove-filter'>{filterInfo.level}<button onClick={handleDeleteLevel}>X</button></span> : null}
            </div>
            {filterInfo.language.map((offerLanguages: string) => {
                return (
                    <div>
                        {offerLanguages ? <span id='remove-filter'>{offerLanguages}
                        <button onClick={e=> handleDeleteLanguages(offerLanguages)}>X</button></span> : null}
                    </div>
                );
            })}
            {filterInfo.tools.map((offerTools: string) => {
                return (
                    <div>
                        {offerTools ? <span id='remove-filter'>{offerTools}
                        <button onClick={e=> handleDeleteTools(offerTools)}>X</button></span> : null}
                    </div>
                );
            })}
        </div>
        <div className='filterbar-right'>
            <button id='clear' onClick={handleCloseFilter}>Clear</button>
        </div>
    </div>
    )
}

export default Filterbar;