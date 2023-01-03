import React from 'react'

const NewsItem = ({name,description,url,urlToImage}) => {
    return (
        <>
            <div className="card my-4 " style={
                {
                    width: "18rem",
                }
            }>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem