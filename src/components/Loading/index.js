import React from 'react';
import './styles.css';

export default function Loading() {
  return (
    <div className="container">
      <div className="loading">
        <p>Loading</p>
        <div className="dot">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}
