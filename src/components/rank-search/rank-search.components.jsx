import { Component } from "react";

class RankSearch extends Component {
    render() {
        const {onRankChange, placeHolder, className} = this.props;
        return(
            
            <input 
                className={`search-box ${className}`} 
                type='search' 
                placeholder={placeHolder} 
                onChange={onRankChange} 
            />
        )
    }
}

export default RankSearch;