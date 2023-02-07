import axios from "axios";
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
// createAsyncThunk : Thunk 비동기 작업

export const getList = createAsyncThunk(
    "GET_LIST",
    async()=>{
        try{
            const res= await axios.get("http://localhost:5000/list");
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)

const initialState = {
  value: 0,
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
   
    
  },
})


//export const { } = listSlice.actions

export default listSlice.reducer