import './App.css';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <form>
          <h1>글목록</h1>
          <div className='List'>
            <ListItem />
          </div>
          <input 
            type="text"
            value=""
          />
          <button type="submit">목록추가</button>
      </form>
    </div>
  );
}

export default App;
