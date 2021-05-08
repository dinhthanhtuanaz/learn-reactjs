import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
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
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    console.log('todo', todo);
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...todo,
      status: todo.status === 'new' ? 'completed' : 'new',
    };
    console.log('newTodoList', newTodoList);
    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }

  const handleShowCompleted = () => {
    setFilteredStatus('completed');
  }

  const handleShowNew = () => {
    setFilteredStatus('new');
  }

  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus);

  return (
    <div>
      <h3>Todo List</h3>
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