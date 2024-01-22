import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imgsrc,newsurl,author,time,source} = this.props;
        return (
            <div>
                <div className="card my-3" >
                    <img src={imgsrc} className="card-img-top" width="200px" height="230px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p class="card-text"><small class="text-muted">By <b>{!author?"Unknown":author}</b> on <b>{new Date(time).toGMTString()}</b></small></p>
                            <a href={newsurl} className="btn btn-sm btn-dark">Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
