import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteList , updateList } from './../store/list/listSlice';

const ListItem = ({id,content}) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const onDelete = (e) =>{
        e.preventDefault();
        dispatch(deleteList(id))
    }
    const onUpdate = (e) => {
        e.preventDefault();
        if(inputValue){
            dispatch(updateList({id,content:inputValue}))
            setInputValue('')
        }else{
            alert('업데이트 값이 없습니다. 작성후 다시 눌러 주세요')
        }
    }
    return (
        <div>
            <h2>{id}:{content}</h2>
            <input 
                type="text" 
                value={inputValue}  
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button type="button" onClick={onDelete}>삭세</button>
            <button type="button"onClick={onUpdate}>수정</button>

        </div>
    );
};

export default ListItem ;