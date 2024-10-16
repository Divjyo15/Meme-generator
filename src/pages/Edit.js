
import React, { useState,createRef} from 'react';
import { useLocation } from 'react-router-dom';
import Text from '../component/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';
function Edit() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const imageUrl = searchParams.get('url');
    
    
 const [count,setCount]  =useState(0);
 const memeRef = createRef();
 const addText = () => {
    setCount(count + 1);
 
    if (!imageUrl) {
        return <div>No image URL provided</div>;
    }

    console.log('Image URL:', imageUrl);
    

    }

    return (
        
        <div>
        <div style={{ marginTop: '20px',border:"2px solid"}} ref={memeRef}>
            <img src={imageUrl} width={'300px'} />
            {
                Array(count).fill(0).map((e) => (
                    <Text/>
                ))
            }
        </div>
        <button onClick={addText}> Add Text </button>
        <button variant="Success" onClick={(e)=>{exportComponentAsJPEG(memeRef)}}> Save Image </button>
        </div>
    );
}

export default Edit;
