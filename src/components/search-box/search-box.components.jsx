
import './search-box.styles.css'

const SearchBox = ({onSearchChange, placeHolder, className}) =>(
    <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeHolder} 
        onChange={onSearchChange} 
    />
)

export default SearchBox;