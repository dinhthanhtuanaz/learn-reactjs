import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';
import { TextField } from '@material-ui/core';
import TodoForm from './components/TodoForm';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  //console.log('location', location, 'history', history, 'match', match);
  const initTodoList = [
    {
      id: 1,
      title: 'Sleep',
      status: 'new',
    },
    {
      id: 2,
      title: 'Eat',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Tuan',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, index) => {
    console.log('todo', todo);
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...todo,
      status: todo.status === 'new' ? 'completed' : 'new',
    };
    console.log('newTodoList', newTodoList);
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path, // get url: /todos
      search: queryString.stringify(queryParams), // convert to string: 'status=all'
    });
  };

  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path, // get url: /todos
      search: queryString.stringify(queryParams), // convert to string: 'status=completed'
    });
  };

  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path, // get url: /todos
      search: queryString.stringify(queryParams), // convert to string: 'status=new'
    });
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || todo.status === filteredStatus
  );

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      {/* <TextField label="tuan" fullWidth /> */}
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
