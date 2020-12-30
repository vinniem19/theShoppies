import React from 'react';
import './style.css'

function Search(props) {
    return (
<div>
    <div className="wrapper">

<div className="row">
  <h1>The Shoppies</h1>

  <form>
      <div className="col-md-2">
  <label id="search-label">
    Movie Name
  </label>
  </div>
  <div className="row">
      <div className="col-md-4">
    <input type="text" name="movie" id="search-field" />
    </div>
  <input type="submit" id="btn-submit" value="Submit" />
    </div>
</form>
  </div>
  </div>
</div>
        )
    }

    export default Search;