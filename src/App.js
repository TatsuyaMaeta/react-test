import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    エディット <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://yahoo.co.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Gs ACADEMY
                </a>
            </header>
        </div>
    );
}

export default App;
