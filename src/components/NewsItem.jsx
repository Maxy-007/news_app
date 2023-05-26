import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgurl, newsurl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgurl?"https://images.indianexpress.com/2023/05/wwdc23.jpg":imgurl} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-info">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
