import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import Header from './components/Header';
import ProfilesList from './components/ProfilesList';

const App: React.FC = () => {
  return (
    <div className="App">
    <Header/>
    <main>
      <Switch>
      <Route path='/profiles' component={ProfilesList} />
      <Route path='/about' render={() => <h3>Come back later...</h3>}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
