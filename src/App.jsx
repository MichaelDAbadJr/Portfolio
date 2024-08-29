import { useState } from 'react';
import picturePlaceApp from './images/picture-place-app.png';
import profilePic from './images/profile-pic.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(100000);
  const formatter = new Intl.NumberFormat();
  const formattedNumber = formatter.format(count);
  return (
    <>
      <div>
        <a href="https://github.com/MichaelDAbadJr" target="_blank">
          <img
            src={profilePic}
            className="logo"
            id="profile-pic"
            alt="Vite logo"
          />
        </a>
      </div>
      <div>
        <h1>I am a fullstack software engineer</h1>
        <a
          style={{ display: 'block', textAlign: 'center' }}
          href="https://github.com/MichaelDAbadJr"
          target="_blank"
        >
          My GitHub Portfolio
        </a>
        <h3>Portfolio in progress, I will be uploading more projects soon</h3>
        <a href="https://sweet-halva-548b5c.netlify.app/" target="_blank">
          <img src={picturePlaceApp} className="logo react" alt="React logo" />
        </a>
        <h5>Check out this Picture Place App I made</h5>
      </div>
      <div className="card">
        <h3>My required salary is $ {formattedNumber}</h3>
        <button
          onClick={() => setCount(formattedNumber => formattedNumber + 1000)}
        >
          Click me to give me a raise
        </button>
      </div>
    </>
  );
}

export default App;
