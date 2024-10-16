
import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function MemeCard(props) {
    const navigate=useNavigate();
    if (!props.meme) {
        return <div>No meme data available</div>; 
    }
    
    return (
        <Card style={{ width: '18rem', margin: '10px', padding: '10px'}}>

            <Card.Img variant="top" src={props.meme.url} style={{ maxWidth: '100%',height: 'auto' }} />
            <Card.Body>
                <Card.Title>{props.meme.name}</Card.Title>
               
        <Button onClick={(e) => navigate(`/edit?url=${props.meme.url}`)} variant="primary">Edit</Button>

            </Card.Body>
        </Card>
    );
}

export default MemeCard;
