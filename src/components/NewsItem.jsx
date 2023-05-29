import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgurl, newsurl, author, source, updatedtime } = props;
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imgurl ? "https://images.indianexpress.com/2023/05/wwdc23.jpg" : imgurl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                        <span className="position-absolute top-0 translate-middle badge bg-info" style={{ left: "80%" }}>
                            <cite title="Source Title">{source}</cite>
                        </span>
                    </h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-info">Read more</a>
                    <footer className="footer my-3">
                        <small>Author: {author ? author : "unknown"}</small>
                    </footer>
                    <p className="card-text">
                        <small className="text-body-secondary">last updated {updatedtime}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
