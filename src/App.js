import React from 'react';
import './App.css';
import ParagraphInput from './Components/ParagraphInput';

function App() {
  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <div className="container">
        <ParagraphInput />
      </div>
    </div>
  );
}

export default App;