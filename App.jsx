import { useState } from 'react';
import './App.css';

function App() {
  const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#9D4EDD'];
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <div className="container" style={{ backgroundColor: colors[index] }}>
      <button onClick={handleClick} className="color-button">
        Change Color
      </button>
    </div>
  );
}

export default App;