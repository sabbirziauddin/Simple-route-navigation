import React, { useEffect, useState } from 'react';
import Friend from '../Frined/Friend';
import './Friends.css'

const Friends = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>

            <h1>Total friends : {users.length}</h1>
            <div className="friends-style">
                {
                    users.map(user => <Friend user={user}></Friend>)
                }

            </div>



        </div>
    );
};

export default Friends; <h1>this is friends</h1>