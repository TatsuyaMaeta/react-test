import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    エディット <code>ソース/App.js</code> アンド セーブ トゥ リロード。
                </p>
                <a
                    className="App-link"
                    href="https://yahoo.co.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    G's ACADEMY
                </a>
            </header>
        </div>
    );
}

export default App;
