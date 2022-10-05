import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://www.ctvnews.ca/polopoly_fs/1.4798178.1580915917!/httpImage/image.png_gen/derivatives/landscape_300/image.png":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem