import React, { Component } from 'react'
import '../css/newsItem.css'
export default class NewsItem extends Component {


    render() {
        let { description, url, imageUrl,title,ind } = this.props;
        return (

            
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target='_blannk' className="btn btn-primary">View Detials</a>
                    </div>
                </div>
            
        )
    }
}
