import React, {Component} from "react"
import newsFeed from "../data/newsFeed"
import SingleNews from "./SingleNews"


class News extends Component{
    render(){
        return(
            <section className="newsSection">
                <div className="newsContainer">
                    <div className="leftPane" style={{backgroundImage: `url(${newsFeed.lead.background})`}}>
                        <div className="leadBox">
                            <h2>{newsFeed.lead.category}</h2>
                            <hr></hr>
                            <h3>{newsFeed.lead.title}</h3>
                            <p>{newsFeed.lead.text}</p>
                            <a className="moreButton" href={newsFeed.lead.url}>LEARN MORE</a>
                        </div>
                    </div>
                    <div className="rightPane">
                        <div className="newsBox">
                            <h2>MORE NEWS</h2>
                            <hr></hr>
                            <div className="newsFlex">
                                {this.createNews()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    createNews(){
        const newsList = newsFeed.news.map(news => {
            return <SingleNews feed={news} key={news.timestamp}></SingleNews>
        })
        return newsList
    }
}

export default News