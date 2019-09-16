import React, {Component} from "react"
import SingleNews from "./SingleNews"
import trendingFeed from "../data/trendingFeed"

class Trending extends Component{
    render(){
        return(
                <section className="trendingSection">
                    <h3>TRENDING</h3>
                    <div className="trendingContainer">
                        {this.createTrendingTiles()}
                    </div>
                </section>
            )
    }

    createTrendingTiles(){
        const trendingList = trendingFeed.map(item => {
            return <SingleNews feed={item} key={item.timestamp}></SingleNews>
        })
        return trendingList
    }
}

export default Trending