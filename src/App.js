import './App.css';
import { useEffect, useState } from 'react';
import EmojiData from './Emoji.json'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  useEffect(() => {
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(newData)
  }, [search])
  return (
    <div className="App">
      <center>
        <h1>
          Emoji Search
        </h1>
        <input type="text" name='search' placeholder="Search for emojis..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </center>
      <h4 style={{margin:'10px', color:'red'}}>Click on symbol to get Copied!</h4>
      {data.map(emoji => <div>
        <div className='card mt-4'>
          <div className='card-body ml-2' style={{cursor:'pointer'}} onClick={() => {navigator.clipboard.writeText(emoji.symbol); alert('Emoji is Copied You can paste it anywhere now!')}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default App;
