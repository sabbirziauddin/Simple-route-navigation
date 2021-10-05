import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Friend = (props) => {
    const { id, name, email, phone } = props.user
    const style = {
        border: '3px solid blue',
        padding: '1rem',
        margin: '1rem'
    }
    const history = useHistory()

    const handleOnclick = () => {
        history.push(`/friend/${id}`);

    }


    return (
        <div style={style}>
            <h1>ID:{id} Name:{name}</h1>
            <h3>Email:{email}</h3>
            <h5>phone:{phone}</h5>
            <Link to={`/friend/${id}`}>add me</Link> <br />
            <button onClick={handleOnclick}> addMe</button>

        </div>
    );
};

export default Friend;