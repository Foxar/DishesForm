import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import DishesForm from './components/DishesForm';


ReactDOM.render(
  <React.StrictMode>
    <div className="page">
      <DishesForm />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);