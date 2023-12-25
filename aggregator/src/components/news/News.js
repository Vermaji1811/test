import React, { useEffect, useState } from "react";
import "./News.css"


const News = () => {
  const [mynews, setMyNews] = useState([]);

  const [showMiniBrowser, setShowMiniBrowser] = useState(false);
  const [selectedArticleUrl, setSelectedArticleUrl] = useState('');

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0cb8f7e1a94d4d498816734a728aa82f"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData('India');
  }, []);

  function onArticleClick(articleUrl) {
    setSelectedArticleUrl(articleUrl);
    setShowMiniBrowser(true);
  }

  return (
    <>
    <h1 className="text-center my-3">Headlines</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img src={ele.urlToImage == null ? "https://www.exchange4media.com/news-photo/100947-expresslogo.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{ele.title == "" ? "Janelle Ash" : ele.title}</h5>
                <p class="card-text">
                 {ele.description}
                </p>
                <button class="btn btn-primary" onClick={() => onArticleClick(ele.url)}>
                  Read More
                </button>
              </div>
            </div>
          </>
        );
    })}
    </div>
    {showMiniBrowser && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <button onClick={() => setShowMiniBrowser(false)}>Close Browser</button>
          <iframe src={selectedArticleUrl} title="Mini Browser" style={{ width: '500px', height: '500px', border: '5px' }} allow="fullscreen" />
        </div>
      )}
    </>
  );
};

export default News;