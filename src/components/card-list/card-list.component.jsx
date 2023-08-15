import './card-list.styles.css';
import Card from "../card/card.components";


const CardList = ({movies}) => (
        <div className="card-list">
            {movies.map((movie) => {
                return(
              <Card key={movie.id} movie={movie}/>
            )})
          }
        </div>
    ) 



export default CardList;