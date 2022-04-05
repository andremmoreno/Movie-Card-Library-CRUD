import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((response) => {
      this.setState({
        movies: response,
      }, () => this.setState({
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div className="movie-list" data-testid="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
