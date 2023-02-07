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

export const addList = createAsyncThunk(
  "ADD_LIST",
  async(newList)=>{
    try{
        const res= await axios.post("http://localhost:5000/list", newList);
        return res.data;
    }catch(err){
        console.log(err)
    }
  }
)



const initialState = {
    data:[],
    message:'default'
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
          state.message = "리스트업 완료";
          state.data=action.payload;
    })
    builder.addCase(addList.fulfilled, (state, action) => {
          state.message = "새로운 리스트 추가 완료했습니다.";
          state.data.push(action.payload);
    })
  },
})


//export const { } = listSlice.actions

export default listSlice.reducer