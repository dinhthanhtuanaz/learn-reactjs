import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  const tuan = 1;
  const tuan2 = 222;
  const isMale = true;
  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
    </div>
  );
}

export default App;
