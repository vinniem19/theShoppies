import React from 'react';
import './style.css';
import axios from 'axios';
import DisplayResults from '../DisplayResults';

class Search extends React.Component {
  constructor (props) { 
    super (props)
    this.state = {
      value: '',
      results: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let movieSearch = `${this.state.value}`;
    console.log(movieSearch);
    axios.get(`http://www.omdbapi.com/?i=tt3896198&s=${movieSearch}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
    .then(res => {
      console.log(res.data.Search);
      this.setState({
        results: res.data.Search,
        value: ''
      })
    })
  }

  nominate = (event) => {
    event.preventDefault();
    
    console.log("I was clicked.")
  }

  render() {
    return (
<div>
    

  <form>
      <div className="col-md-2">
  <label id="search-label">
    Movie Name
  </label>
  </div>
  <div className="row">
      <div className="col-md-4">
    <input type="text" name="movie" id="search-field" onChange={this.handleChange} />
    </div>
  <input type="submit" id="btn-submit" value="Submit" onClick={this.handleSubmit} />
    </div>
</form>

  
    <h1>Movie Names:</h1>

     {this.state.results.map(movie =>( 
    //console.log(movie.Title)
    
    <DisplayResults 
        // id="movie-results"
        movieId={movie.imdbID}
        movieTitle={movie.Title} 
        movieYear={movie.Year} 
        key={movie.imdbID}
        nominate={this.nominate}
          /> 
          
     ))
         } 
      
      <div className="row" id="movie-nominated">
        <h1>Nominated:</h1>
      </div>
      

</div>
        );
    }
  }

    export default Search;