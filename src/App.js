import './App.css';

function App() {
  return (
    <div className="App">

      <div class="hexagone">
        <h1>SOCIAL METAVERSE</h1>
        <p>Social deduction is the first game mode. Custom game modes, map makers, and metaverse expansion are planned for future releases.</p>
      </div>
      <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
