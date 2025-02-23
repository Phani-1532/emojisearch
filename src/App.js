import './App.css';
import { useEffect, useState } from 'react';
import EmojiData from './Emoji.json';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter(emoji =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Search</h1>
        <input
          type="text"
          name="search"
          placeholder="Search for emojis..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(e) => e.target.placeholder = "Search"}
          onBlur={(e) => e.target.placeholder = "Search for emojis..."}
        />
        <p>"Find the perfect emoji to express yourself! You have to copy the emoji to use it."</p>
      </header>
      <div className="emoji-container">
        {data.map(emoji => (
          <div key={emoji.title} className="emoji-card" onClick={() => { navigator.clipboard.writeText(emoji.symbol); alert('Emoji is Copied! You can paste it anywhere now!'); }}>
            <div className="emoji-symbol">{emoji.symbol}</div>
            <div className="emoji-title">{emoji.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
