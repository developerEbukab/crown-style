import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
