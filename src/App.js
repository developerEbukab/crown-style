import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component{
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  
  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Header/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
