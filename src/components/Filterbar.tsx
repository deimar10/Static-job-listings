import React from "react";
import './Filterbar.css'

function Filterbar () {
    return (
        <div className='filterbar'>
        <div className='filterbar-left'>
                <span id='remove-filter'>Frontend<button>X</button></span>
                <span id='remove-filter'>Senior<button>X</button></span>
                <span id='remove-filter'>HTML<button>X</button></span>
        </div>
        <div className='filterbar-right'>
            <button id='clear'>Clear</button>
        </div>
    </div>
    )
}

export default Filterbar;