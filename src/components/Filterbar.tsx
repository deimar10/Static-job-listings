import React from "react";
import './Filterbar.css'

function Filterbar ({filterInfo, setFilterInfo, setFilterbar}: any) {

    const handleCloseFilter = () => {
        setFilterbar(false);
        setFilterInfo({
            role: '',
            level: '',
            language: '',
            tools: ''
        });
    }

    return (
        <div className='filterbar'>
        <div className='filterbar-left'>
            {filterInfo.role ? <span id='remove-filter'>{filterInfo.role}<button>X</button></span> : null}
            {filterInfo.level ? <span id='remove-filter'>{filterInfo.level}<button>X</button></span> : null}
            {filterInfo.language ? <span id='remove-filter'>{filterInfo.language}<button>X</button></span> : null}
            {filterInfo.tools ? <span id='remove-filter'>{filterInfo.tools}<button>X</button></span> : null}
        </div>
        <div className='filterbar-right'>
            <button id='clear' onClick={handleCloseFilter}>Clear</button>
        </div>
    </div>
    )
}

export default Filterbar;