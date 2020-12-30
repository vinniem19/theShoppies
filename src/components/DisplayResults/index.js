import React from 'react';
import './style.css'


function DisplayResults (props) {
    return (
        <div>
            <div className="row" >
                <div className="col-md-6" id="results-box">
                <h2>Movie Results</h2>
                </div>

                <div className="col-md-6" id="nomination-box">
                <h2>Nominations</h2>
                </div>
            </div>

        </div>
    )
}

export default DisplayResults;