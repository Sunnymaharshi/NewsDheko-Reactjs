import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const defaultUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p-wtbH5WWOzY_5a4WmZFjLHXNLR1c4NKa2E0xt3cEv4Mm9mqHeSSKn1KbEdZvRXfnTU&usqp=CAU";

  const update = () => {
    document.title = "Home - News Dheko";
  };
  const fetchMore = async () => {
    setTimeout(() => {
      props.setProgress(20);
    }, 100);
    setTimeout(() => {
      props.setProgress(60);
    }, 100);
    setTimeout(() => {
      console.log("concat");
      props.setArticles(props.articles.concat(props.fixed));
      props.setProgress(100);
    }, 1200);
  };
  useEffect(() => {
    update();
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        marginTop: "60px",
      }}
    >
      {props.loading && <Spinner />}
      <InfiniteScroll
        dataLength={props.articles.length}
        next={fetchMore}
        hasMore={props.articles.length <= 1000}
        loader={<Spinner />}
      >
        <h1 className="text-center">
          Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        <div className="container">
          <div className="row">
            {props.articles.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
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
  category: "general",
};
News.propTypes = {
  category: propTypes.string,
};
