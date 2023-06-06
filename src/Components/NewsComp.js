import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class NewsComp extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            page:1,
            
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eb7794a3351448db9f09237c88210ab0&page=1&pageSize=20";
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            totalResults:data.totalResults
        })
      
    }
    handleNextBtn=async ()=>{
      
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=eb7794a3351448db9f09237c88210ab0&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            page:this.state.page+1
        })
       
       

    }
    handlePrevBtn =async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=eb7794a3351448db9f09237c88210ab0&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            page:this.state.page-1
        })
    }
    render() {
        return (
            <div>

                <div className='container'>
                    <h1 className='text-center'>GET Hot News</h1>
                    <div className='row gy-3 mt-3'>
                        {this.state.articles.map((element, index) => {

                            return (

                                <div className='col-12 col-md-4 col-lg-4 col-xxl-3 d-flex justify-content-evenly' key={element.url}>
                                    <NewsItem imageUrl={element.urlToImage ? element.urlToImage : "https://storage.googleapis.com/afs-prod/media/05c87c10252b4ecab4dcdb1a4cbf1014/3000.webp"} description={element.description ? element.description.slice(0, 100) : ""} url={element.url} title={element.title.slice(0, 40)} ind={index} />
                                </div>

                            );
                        })
                        }
                    </div>

                    <div className='row my-3'>
                        <div className='col d-flex justify-content-between'>
                            <button disabled={this.state.page<=1} className='ms-5 btn btn-outline-success' onClick={this.handlePrevBtn}> &larr;Prevois</button>
                            <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/20)} className='me-5 btn btn-outline-success' onClick={this.handleNextBtn}> Next&rarr;</button>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}
