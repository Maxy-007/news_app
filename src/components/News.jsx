import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - InsighDigest`;
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

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ebb9ec612bed41ea82745997ac49c594&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    };

    render() {
        return (
            <div className='container my-4'>
                <h1 className='mb-4 text-center' style={{ margin: '40px' }}>InsightDigest - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                > <div className="container">
                        <div className="my-3 row" style={{ display: "flex" }} >
                            {!this.state.loading && this.state.articles.map((element => {
                                return <div className="col-md-4 my-3" style={{ alignItems: "stretch" }} key={element.url}>
                                    <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} source={element.source.name} updatedtime={element.publishedAt} />
                                </div>
                            }))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
