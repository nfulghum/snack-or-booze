import React, { useState } from 'react';

const AddForm = ({ setData }) => {
    const initialState = {
        item: "",
        name: ""
    }

    const [formData, setFormData] = useState(initialState);
    const [item, setItem] = useState('Food');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fd => ({
            ...fd,
            [name]: value,
            item: item
        }))
    }

    const test = () => {
        const sel = document.getElementById('item');
        console.log(sel.value)
        setItem(sel.value);
    }

    const setDataForParent = (e) => {
        e.preventDefault()
        console.log(e);
        setData(formData);
    }

    return (
        <form onSubmit={setDataForParent}>
            <label htmlFor="item">Food or Drink</label>
            <select onChange={test} id="item" name="item">
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>

            <br />

            <label htmlFor="name">Item Name</label>
            <input type="text" onChange={handleChange} id="name" name="name" value={formData.name} />

            <br />

            <button>Add Item</button>
        </form>
    )
}

export default AddForm;