import { ChangeEvent } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeHolder?: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}



const SearchBox = ({onSearchChange, placeHolder, className}: SearchBoxProps) =>(
    <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeHolder} 
        onChange={onSearchChange} 
    />
)

export default SearchBox;