import React from "react";
import business from "../news-data/business";
import entertainment from "../news-data/entertainment";
import health from "../news-data/health";
import sports from "./../news-data/sports";
import general from "../news-data/general";
import technology from "./../news-data/technology";
import science from "./../news-data/science";

const Navbar = (props) => {
  const update = (news) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      props.setProgress(20);
    }, 100);
    setTimeout(() => {
      props.setProgress(60);
    }, 100);

    setTimeout(() => {
      props.setArticles(news);
      props.setFixed(news);
      props.setProgress(100);
      console.log(props.articles);
    }, 700);

    props.setLoading(false);
  };
  const setgeneral = () => {
    update(general.articles);
    document.title = "General - News Dheko";
    props.setCategory("general");
  };
  const setentertainment = () => {
    update(entertainment.articles);
    document.title = "Entertainment - News Dheko";
    props.setCategory("entertainment");
  };
  const sethealth = () => {
    update(health.articles);
    document.title = "Health - News Dheko";
    props.setCategory("health");
  };
  const setsports = () => {
    update(sports.articles);
    document.title = "Sports - News Dheko";
    props.setCategory("sports");
  };
  const settechnology = () => {
    update(technology.articles);
    document.title = "Technology - News Dheko";
    props.setCategory("technology");
  };
  const setbusiness = () => {
    update(business.articles);
    document.title = "Business - News Dheko";

    props.setCategory("business");
  };
  const setscience = () => {
    update(science.articles);
    document.title = "Science - News Dheko";
    props.setCategory("science");
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            News Dekho
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#general"
                  onClick={setgeneral}
                >
                  My News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#business" onClick={setbusiness}>
                  business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#entertainment"
                  onClick={setentertainment}
                >
                  entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#general" onClick={setgeneral}>
                  general
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#health" onClick={sethealth}>
                  health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#science" onClick={setscience}>
                  science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sports" onClick={setsports}>
                  sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#technology"
                  onClick={settechnology}
                >
                  technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
