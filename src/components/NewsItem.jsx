import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgurl, newsurl} = this.props;
        return (
            <div>
                <div class="card" style={{width: "18rem"}}>
                    <img src={imgurl} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <a href="/" class="btn btn-sm btn-info">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem