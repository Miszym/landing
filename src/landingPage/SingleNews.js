import React, {Component} from "react"
import timeIcon from "../img/time.svg"

class SingleNews extends Component{
    render(){
        const newsImage = this.props.feed.img ? <img className="newsImage" src={this.props.feed.img} alt=""></img> : null
        const category = this.props.feed.category ?<h4 className="category">{this.props.feed.category}</h4> : null
        return(
            <a className="singleNews" href={this.props.feed.url}>
                {newsImage}
                {category}
                <h4>{this.props.feed.title}</h4>
                <p>{this.props.feed.text.substring(0, 100)}...</p>
                <h6 className="timestamp"><img className="timeIcon" src={timeIcon} alt=""></img>{this.generateTimestamp()} ago</h6>
            </a>
        )
    }

    generateTimestamp(){
        const feedTimestamp = new Date (Date.parse(this.props.feed.timestamp))
        const now = new Date()
        if(now.getFullYear() !== feedTimestamp.getFullYear()){
            return `${now.getFullYear() - feedTimestamp.getFullYear()} y`
        }
        else if (now.getMonth() !== feedTimestamp.getMonth()){
            return `${now.getMonth() - feedTimestamp.getMonth()} mo`
        }
        else if (now.getDate() !== feedTimestamp.getDate()){
            return `${now.getDate() - feedTimestamp.getDate()} d`
        }
        else if (now.getHours() !== feedTimestamp.getHours()){
            return `${now.getHours() - feedTimestamp.getHours()} h`
        }
        else{
            return `${now.getMinutes() - feedTimestamp.getMinutes()} min`
        }
    }
}

export default SingleNews