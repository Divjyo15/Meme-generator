
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Text = () => {
    const [edit, setEdit] = useState(false);
    const [val, setVal] = useState("Double Click to edit");

    return (
        <Draggable>
            <div>
                {edit ? (
                    <input 
                        onDoubleClick={e => setEdit(false)} 
                        value={val} 
                        onChange={(e) => setVal(e.target.value)} 
                    />
                ) : (
                    <h1 onDoubleClick={e => setEdit(true)}>Text</h1>
                )}
            </div>
        </Draggable>
    );
}

export default Text;
