import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const AddForm = ({ add }) => {
    const initialState = {
        name: "",
        serve: "",
        description: "",
        recipe: "",
    }
    const [formData, setFormData] = useState(initialState);
    const { type } = useParams();


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fd => ({
            ...fd,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        add(formData, type)
        setFormData(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="serve">Serve</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="serve"
                        id="serve"
                        value={formData.serve}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        value={formData.description}
                        id="description"
                    />
                </div>

                <div>
                    <label htmlFor="recipe">Recipe</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="recipe"
                        value={formData.recipe}
                        id="recipe"
                    />
                </div>
                <button
                    id="newItemButton"
                    type="submit"
                    onClick={() => alert("sucessfully added!")}
                >
                    Add a new {type}!
                </button>
                <button>
                    <Link to={`/${type}`}>back!</Link>
                </button>
            </form>
        </div>
    )
}

export default AddForm;