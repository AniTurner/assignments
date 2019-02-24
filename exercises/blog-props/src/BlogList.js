import React from 'react'
import BlogPost from './BlogPost.js'

const BlogList = () => {
    return (
        <div>
            <BlogPost title= "Man must explore, and this is exploration at its greatest" subtitle="Problems look mighty small from 150 miles up" author="Posted by Start Bootstrap" date=" on September 24, 2019" />

            <BlogPost title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." author="Posted by Start Bootstrap" date=" on September 18, 2019"/>

            <BlogPost title="Science has not yet mastered prophecy" subtitle="We predict too much for the next year and yet far too little for the next ten." author="Posted by Start Bootstrap" date=" on August 24, 2019"/>

            <BlogPost title="Failure is not an option" subtitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations." author="Posted by Start Bootstrap" date=" on July 8, 2019"/>
            
            <div className="box-container">
                <p className='box'>Older Posts  →</p>           
            </div> 
    
        </div>
    )
}

export default BlogList