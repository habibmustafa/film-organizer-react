import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }
    render() { 
        return (
            <div className="favorites">
                <input placeholder="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item, index) => {
                        return <li key={index}>{item.title} ({item.year})</li>; // hələlik keyi index
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;