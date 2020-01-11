import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router'
import ProfileCard from './components/ProfileCard';
import { Card, Button } from 'react-bootstrap'
import Header from './components/Header';
import ProfilesList from './components/ProfilesList';

const App: React.FC = () => {
  return (
    <div className="App">
    <Header/>
    <main>
      <Switch>
      <Route path="/profiles" component={ProfilesList} />
      </Switch>
    </main>
    </div>
  );
}

export default App;
