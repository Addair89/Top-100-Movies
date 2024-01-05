import { Component } from "react";
import { Movie } from "../../App";
import './card.styles.css';

type CardProps = {
    movie: Movie
}

// class Card extends Component {
    const Card = ({movie}: CardProps) => {
    
        const {title, id, images, Director, rank, imdbid} = movie;
        
        return (
            <div key={id} className="card-container">
                <a href={`https://www.imdb.com/${imdbid}`} target="_blank">
                <img alt="monster" src={images[2][1]}/>
                <h2>{title}</h2>
                <p>Rank: {rank}</p>
                <p>Director:</p>
                <p>{Director[0]}</p>
                </a>
            </div>
        )
    }

export default Card;