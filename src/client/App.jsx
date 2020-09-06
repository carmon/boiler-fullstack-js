import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './app.css';
import pic from './pic.gif';

const App = ({ color }) => {
  const [title, setTitle] = useState('Loading.. please wait!');

  useEffect(async () => {
    const result = await fetch('/api/getTitle');
    const json = await result.json();
    setTitle(json.title);
  }, []);

  return (
    <div>
      <h1 style={{ color }}>{title}</h1>
      <div className="content">
        <img src={pic} alt="A gif" />
        <img src={pic} alt="A gif" />
        <img src={pic} alt="A gif" />
      </div>
    </div>
  );
};

App.propTypes = {
  color: PropTypes.string
};

App.defaultProps = {
  color: ''
};

export default App;
