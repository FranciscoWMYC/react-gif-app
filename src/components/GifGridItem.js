import React from 'react'

export const GifGridItem = ({id,title,urlImage}) => {
    // console.log(id,title,urlImage);
    return (
        <div className="card animate__animated animate__pulse">
            <img src={urlImage} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
