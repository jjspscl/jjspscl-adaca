import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SampleComponent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://example.com/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError('An error occurred');
            });
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
