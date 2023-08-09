import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {



  return (
    <Router>
    <div className='app'>
      <Routes>
        
        <Route  path='/' element={ <> <Header/>
        <img className="logo" src="" />
        <Home/>
        </>}>
        </Route>

        <Route  path='/login' element={<Login/>}>
        </Route>

        <Route path='/checkout' element={<> <Header/>
          <img className="logo" src=""/>
           <Checkout/> </>} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
