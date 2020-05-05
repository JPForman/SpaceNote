import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './comonents/Header'
import Feed from './comonents/Feed'
import Profile from './comonents/Profile'
import Home from './comonents/Home'

import testJsonObject from './test_json_object.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterUserList: [],
      selectedUser: {},
    };
  }

  componentDidMount = async() => {
    let masterList = testJsonObject;
    console.log('masterList = ', masterList);
    await  this.setState({masterUserList: masterList})
    await  this.setState({selectedUser: masterList[0]})
    await console.log('masterUserList = ', this.state.masterUserList);
    await console.log('selectedUser = ', this.state.selectedUser);

  }

  render(){

      return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={()=><Home />}/>
          <Route exact path="/feed" render={()=><Feed />}/>
          <Route exact path="/profile" render={()=><Profile selectedUser={this.state.selectedUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
