import React from 'react'

const AddTodoForm = (props) => {

    const  {title, description, price, handleChange, handleSubmit, btnText} = props

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={title} onChange={handleChange} placeholder="Title" />
            <input type='text' name='description' value={description} onChange={handleChange} placeholder="description" />
            <input type='text' name='price' value={price} onChange={handleChange}  placeholder="price"/>
            <button>{btnText}</button>
        </form>
    )
}

export default AddTodoForm