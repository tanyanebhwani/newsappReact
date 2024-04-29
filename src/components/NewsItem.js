import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card" >
          <div style={{display:"flex",justifyContent:"flex-end",position:'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://cdn.mos.cms.futurecdn.net/rjdGi9hmMPhbd6Z7f3rcdT-1200-80.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text text-danger">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
