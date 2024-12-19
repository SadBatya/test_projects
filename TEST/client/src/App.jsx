import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/question')
      .then((response) => response.json())
      .then((data) => setText(data.message));
  }, []);
  console.log(text);
  return (
    <>
      <p className='read-the-docs'>{!text ? 'still loading...' :  text }</p>
    </>
  );
}

export default App;
