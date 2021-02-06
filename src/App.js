import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp.component';
import { auth } from './firebase/firebase.utils';

class App extends Component{
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  
  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
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
}

export default App;
