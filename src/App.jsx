import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Dashboard  from './Dashboard/Dashboard';
import Borrow  from './Borrow/Borrow';
import Saving from './Saving/Saving';
import Lending  from './Lending/Lending';
import './App.scss';
const App = () => {
    return (
        <BrowserRouter>
         <div class="container" style={{display:"flex"}}>
          <Sidebar/>
          <Routes>
             <Route exact path="/" element= {<Dashboard />} />
             <Route exact path="/borrow" element= {<Borrow />} />
             <Route exact path="/saving" element= {<Saving />} />
             <Route exact path="/lending" element= {<Lending />} />
          </Routes>
        </div>     
        </BrowserRouter>
    )
}

export default App