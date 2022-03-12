import Home from "./components/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio}/>
      </Router>
    </div>
  );
}

export default App;
