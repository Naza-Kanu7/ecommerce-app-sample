import './App.css';
import Header from './containers/Header.component';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import ProductListing from './containers/ProductListing.component';
import ProductDetail from './containers/ProductDetail.component';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
