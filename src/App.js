/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import api from './services/api';

import Loading from './components/Loading';
import Main from './components/Main';

import './styles/global.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  if(loading) return <Loading />
    
  return <Main />
}
