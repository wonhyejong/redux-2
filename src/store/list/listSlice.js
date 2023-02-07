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


export const deleteList = createAsyncThunk(
  "DELETE_LIST",
  async(id)=>{
    try{
        const res= await axios.delete(`http://localhost:5000/list/${id}`);
        return id;
    }catch(err){
        console.log(err)
    }
  }
)

export const updateList = createAsyncThunk(
  "UPDATE_LIST",
  async({id,content})=>{
    try{
        const res= await axios.put(`http://localhost:5000/list/${id}`,{
          content:content
        });
        return {id,content}
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
    builder.addCase(deleteList.fulfilled, (state, action) => {
      state.message = "삭제가 완료 되었습니다.";
      state.data = state.data.filter(item=>item.id !== action.payload)
    })
    builder.addCase(updateList.fulfilled, (state, action) => {
      state.message = "리스트가 수정 되었습니다.";
      const num=state.data.findIndex(item => item.id === action.payload.id)
      state.data.splice(num,1,action.payload); 
    })
  },
})


//export const { } = listSlice.actions

export default listSlice.reducer