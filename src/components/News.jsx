import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: '6',
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        }
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ebb9ec612bed41ea82745997ac49c594&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className='mb-4 text-center' style={{ margin: '40px' }}>InsightDigest - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="my-3 row" style={{ display: "flex" }} >
                    {!this.state.loading && this.state.articles.map((element => {
                        return <div className="col-md-4 my-3" style={{ alignItems: "stretch" }} key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} source={element.source.name} updatedtime={element.publishedAt} />
                        </div>
                    }))}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info mx-2" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
