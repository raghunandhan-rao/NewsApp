import React from "react";

const NewsItem=(props)=>{
    let { title, description, imgUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"left":"90%",zIndex:"10"}}>
            {source}
          </span>
          <img
            src={
              (imgUrl = null
                ? "https://photos5.appleinsider.com/gallery/61357-126775-Savings-xl.jpg"
                : imgUrl)
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on {date}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
