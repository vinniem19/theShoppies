import './App.css';
import Search from './components/Search/index.js'
import DisplayResults from './components/DisplayResults/index.js'
function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
      <Search />
      <DisplayResults />
    </div>
    </div>
  );
}

export default App;
