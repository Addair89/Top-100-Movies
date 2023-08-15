import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render(){
        const {title, id, image, director, rank, imdbid} = this.props.movie;
        return (
            <div key={id} className="card-container">
                <a href={`https://www.imdb.com/title/${imdbid}`} target="_blank">
                <img alt="monster" src={image[2][1]}/>
                <h2>{title}</h2>
                <p>Rank: {rank}</p>
                <p>Director:</p>
                <p>{director}</p>
                </a>
            </div>
        )
    }

}

export default Card;