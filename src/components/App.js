import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterById from '../containers/characters/CharacterById';
import AllCharacters from '../containers/characters/AllCharacters';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/:id" component={CharacterById} />
      </Switch>
    </Router>
  );
}
