import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import DebitsList from './components/DebitsList';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser: {
        userName: 'danremel',
        memberSince: 2010
      },
      debits: [],
      credits: []
    }
  }

  _getDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then((res) => {
        const debits = res.data;
        this.setState({debits})
      });
  };

  _getCredits = () => {
    axios.get('http://localhost:4000/credits')
      .then((res) => {
        const credits = res.data;
        this.setState({credits})
      });
  };
  
  _calculateAccountBalance = () => {
    // reduce function
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount;
    }, 0)
    // reduce function
    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount;
    }, 0)

    return totalCredits - totalDebits;
  }

  componentWillMount () {
    this._getDebits();
    this._getCredits();
  }

  render() {

    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (
    <Home 
      accountBalance={accountBalance}/>
    );
    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince}
        accountBalance={accountBalance}/>
    );
    const DebitsListComponent = () => (
      <DebitsList
        accountBalance={accountBalance}
        credits={this.state._getCredits}
        debits={this.state._getDebits}
        />
    );
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/debitsList" render={DebitsListComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
