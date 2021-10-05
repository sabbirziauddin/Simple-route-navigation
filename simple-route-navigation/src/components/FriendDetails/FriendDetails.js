import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFreind] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFreind(data))

    }, [])

    return (
        <div>
            <h4> Id number <span style={{ color: 'red' }}> {friendId}</span>  friend detais</h4>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>address:{friend.address?.city}</h5>

        </div>
    );
};

export default FriendDetails;