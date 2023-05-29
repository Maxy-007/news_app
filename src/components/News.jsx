import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

    }

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - InsighDigest`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container my-4'>
            <h1 className='mb-4 text-center ' style={{ margin: '35px 0PX', marginTop: '90px' }}>InsightDigest - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            > <div className="container">
                    <div className="my-3 row" style={{ display: "flex" }} >
                        {!loading && articles.map((element => {
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

export default News

News.defaultProps = {
    country: 'in',
    pagesize: '6',
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
};
