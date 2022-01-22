import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import general from "./news-data/general";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState(general.articles);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar
        setLoading={setLoading}
        setProgress={setProgress}
        setCategory={setCategory}
        setArticles={setArticles}
        category={category}
      />
      <LoadingBar color="#f11946" progress={progress} height={2} />
      <News loading={loading} articles={articles} category={category} />
    </>
  );
};

export default App;
