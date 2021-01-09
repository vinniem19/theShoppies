import './App.css';
import Header from './components/Header/index.js';
import Search from './components/Search/index.js';
//import movieReel from './movieReel.jpg';
//import DisplayResults from './components/DisplayResults/index.js'


function App(props) {



  return (
    <div className="App">
      
      <Header />
      
      <div className="wrapper">

      <Search />
      
    </div>
    </div>
  );
}

export default App;
