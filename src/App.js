import React, { useEffect } from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Route } from 'react-router';
import categoryApi from './api/categoryApi';
import CounterFeature from './features/Counter';

function App() {
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await categoryApi.getAll();
      console.log(categoryList);
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      Home Page
      <Route path="/" component={CounterFeature} exact />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
