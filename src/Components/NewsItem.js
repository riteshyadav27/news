import React, { Component } from 'react'
import newsimg from './news.jpg'
export class NewsItem extends Component {
    render() {
        let {title,description,imgsrc,newsurl,author,time,source} = this.props;
        return (
            <div>
                <div className="card my-3" >
                    <img src={imgsrc?imgsrc:newsimg} className="card-img-top" height="220px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By <b>{!author?"Unknown":author}</b> on <b>{new Date(time).toGMTString()}</b></small></p>
                            <a href={newsurl} className="btn btn-sm btn-dark">Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
