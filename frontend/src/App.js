import {BrowserRouter as Router,Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <Router>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Amazona</a>
        </div>
        <div>
            <a href="/">cart</a>
            <a href="/">Sign in</a>
        </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
     
    </main>
    <footer className="row center">
        All right reserved
    </footer>
  </div>
  </Router>
  );
}

export default App;
