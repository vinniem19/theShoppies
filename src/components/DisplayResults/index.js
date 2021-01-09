import React from 'react';
import '../Search';
//import './style.css'




function DisplayResults (props) {
    return (
        <div>
            
                <div className="row">
                    <div className="col-md-6" id="display-results">
                    <h3>{props.movieTitle} ({props.movieYear})</h3><button onClick={props.nominate}>Nominate</button>
                    </div>
                </div>
            

                
            </div>

        
    )
}

export default DisplayResults;