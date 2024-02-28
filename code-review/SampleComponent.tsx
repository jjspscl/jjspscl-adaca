import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';


enum BUSINESS_ERRORS {
    GET_DATA = 'GET_DATA'
}

function SampleComponent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('http://example.com/api/data');

            setData(response.data);
            // return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) {
                    switch (error.response.status) {
                        case 404:
                            // Handle 404 error
                            setError('404 error');
                            break;
                        case 500:
                            // Handle 500 error
                            setError('500 error');
                            break;
                    }
                }
            }

            // Handle other errors
            throw new Error(BUSINESS_ERRORS.GET_DATA)
            setError('An error occurred');
        }
    }

    useEffect(() => {
        fetchData()
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
