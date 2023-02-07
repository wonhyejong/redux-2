import React from 'react';

const listItem = ({content,id}) => {
    return (
        <div>
            <h2>{id}:{content}</h2>
            <input 
                type="text" 
                value=""  
            />
            <button type="button">삭세</button>
            <button type="button">수정</button>

        </div>
    );
};

export default listItem;