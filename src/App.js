import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Route } from 'react-router';

function App() {
  const tuan = 1;
  const tuan2 = 222;
  const isMale = true;
  return (
    <div className="App">
      Home Page
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
