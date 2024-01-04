import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';
import RankSearch from './components/rank-search/rank-search.components';



    

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [rankSearch, setRankSearch] = useState('');
  const [movies, setMovie] = useState([]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
      const rankSearchBox = document.querySelector('.rank-search-box');
      rankSearchBox.setAttribute('disabled', 'true');
      setSearchField(searchString);
      if(searchString === ''){
        rankSearchBox.removeAttribute('disabled');
      }
  }


  useEffect(() => {
    const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bfc24521f2mshca652fa0964c6aap1c960ejsn898ac9cc5dfe',
        'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
      }
    };
      fetch(url, options)
        .then((response) => response.json())
        .then((movies) => setMovie(movies))

      
    },[])
    console.log(movies)
  const onRankChange = (event) => {
      const rankSeach = event.target.value;
      const movieSearchBox = document.querySelector('.movie-search-box')
      movieSearchBox.setAttribute('disabled', 'true');
      setRankSearch(rankSeach);
      if(rankSeach === ''){
        movieSearchBox.removeAttribute('disabled');
      }
    }

    const filteredSearchMovies = movies.filter((el) => {
          return el.title.toLowerCase().includes(searchField);
      }) 
      
    const filteredRankMovies = movies.filter((el) => {
      return el.rank == rankSearch
    })  
    const filteredMovies = filteredRankMovies.length > 0 ? filteredRankMovies : filteredSearchMovies;    

  return(
    <div className="App">
        <h1 className='app-title'>IMDB's Top 100 Movies</h1>
        <h2 className='app-title-2'>Search IMDB's top 100 movies by title or rank. Click on the movie card to get more information!</h2>
        <SearchBox className='movie-search-box' 
        placeHolder='Search By Title' 
        onSearchChange={onSearchChange}/>

        <RankSearch 
        className='rank-search-box'
        placeHolder='Search By Rank(1-100)'
        onRankChange={onRankChange}/>
        
        <CardList movies={filteredMovies}/> 
      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       movies: [],
//       searchField: '',
//       rank: ''
//     }
//   }

//    componentDidMount() {
//     // const url = 'https://jsonplaceholder.typicode.com/users';
//     // //un comment for movies API
//     const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'bfc24521f2mshca652fa0964c6aap1c960ejsn898ac9cc5dfe',
//         'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
//       }
//     };
//       fetch(url, options)
//         .then((response) => response.json())
//         .then((movies) => this.setState(() => {
//           return {movies: movies};
//         },
//         () => {
//           console.log(this.state);
//         }
//         ))
//     }

//     onSearchChange = (event) => {
//       const searchString = event.target.value.toLowerCase();
//       const rankSearchBox = document.querySelector('.rank-search-box');
//       rankSearchBox.setAttribute('disabled', 'true');
      
//       this.setState(() => {
//         return {searchField: searchString}
//       })
//       if(searchString === ''){
//         rankSearchBox.removeAttribute('disabled');
//       }
//     }

//     onRankChange = (event) => {
//       const rankSeach = event.target.value;
//       const movieSearchBox = document.querySelector('.movie-search-box')
//       movieSearchBox.setAttribute('disabled', 'true');
      
//       this.setState(() => {
//         return {rank: rankSeach}
//       })
//       if(rankSeach === ''){
//         movieSearchBox.removeAttribute('disabled');
//       }
//     }
   
//   render() {

//     const {movies, searchField, rank} = this.state;
//     const {onSearchChange, onRankChange} = this;

//     const filteredSearchMovies = movies.filter((el) => {
//         return el.title.toLowerCase().includes(searchField);
//     }) 

//     const filteredRankMovies = movies.filter((el) => {
//       console.log(el.rank, rank)
//       return el.rank == rank
//     })

//     const filteredMovies = filteredRankMovies.length > 0 ? filteredRankMovies : filteredSearchMovies;

//     return (
//       <div className="App">
//         <h1 className='app-title'>IMDB's Top 100 Movies</h1>
//         <SearchBox className='movie-search-box' 
//         placeHolder='Search Movies' 
//         onSearchChange={onSearchChange}/>
//         <RankSearch 
//         className='rank-search-box'
//         placeHolder='Search Rank 1-100'
//         onRankChange={onRankChange}/>
//         <CardList movies={filteredMovies}/>
//       </div>
//     );
//   }
// }

export default App;
