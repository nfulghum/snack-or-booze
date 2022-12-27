import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddForm from './AddForm';

const Add = () => {
    const [data, setData] = useState("");

    if (data) {
        return (
            <div>
                <p>{data.name} added</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
    return <AddForm setData={setData} />
}

export default Add;
