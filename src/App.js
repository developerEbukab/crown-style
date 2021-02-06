import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Switch >
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={SignInAndSignUp}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
