import React from 'react'


const BlogPost = (props) => {
    return (
        <div className="blogpost-container">
            <p className="title">{props.title} </p>
            <p className="subtitle">{props.subtitle}</p>
            <p className="lastsentence">{props.author}</p>
            <p className="lastsentence">{props.date}</p>
            <p className="line-through">{props.line}</p>
        </div>
    )
}


export default BlogPost