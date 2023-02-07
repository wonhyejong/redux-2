import './App.css';
import ListItem from './components/ListItem';
import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import {getList,addList} from './store/list/listSlice'


function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const listdata= useSelector((state)=>state.list);
  useEffect(()=>{
    dispatch(getList());
  },[])
  const onCreate = (e) => {
    e.preventDefault();
    if(inputValue){
      const newList = {content : inputValue }
      dispatch(addList(newList))
    }else{
      alert('새로운 목록의 내용을 입력하세요')
    }
  }
  return (
    <div className="App">
      <form onSubmit={onCreate}>
          <h1>{listdata.message}</h1>
          <div className='List'>
            { listdata.data.map(ele=>(
              <ListItem key={ele.id} content={ele.content} id={ele.id} />
            ))}
            
          </div>
          <input 
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
          <button type="submit">목록추가</button>
      </form>
    </div>
  );
}

export default App;
