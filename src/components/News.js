import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const defaultUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p-wtbH5WWOzY_5a4WmZFjLHXNLR1c4NKa2E0xt3cEv4Mm9mqHeSSKn1KbEdZvRXfnTU&usqp=CAU";

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News Dheko`;
    updateNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };
  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  const fetchMore = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
  };

  return (
    <div
      style={{
        marginTop: "60px",
      }}
    >
      <h1 className="text-center">
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 45) : ""}
                    des={
                      article.description
                        ? article.description.slice(0, 60)
                        : ""
                    }
                    imageUrl={
                      article.urlToImage ? article.urlToImage : defaultUrl
                    }
                    newsUrl={article.url}
                    author={article.author ? article.author : "unknown"}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
