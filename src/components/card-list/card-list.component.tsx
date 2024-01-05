import { Movie } from '../../App';
import './card-list.styles.css';
import Card from "../card/card.components";

type CardProps ={
  movies: Movie[];
}

const CardList = ({movies}: CardProps) => (
        <div className="card-list">
            {movies.map((movie) => {
                return(
              <Card key={movie.id} movie={movie}/>
            )})
          }
        </div>
    ) 



export default CardList;