import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <h3 className="movie-card-header">{ movie.title }</h3>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <div className="link-conteiner">
            <Link className="add-movie" to={ `movies/${movie.id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
      // <div className="card movie-card-image">
      //   <img src={ movie.imagePath } className="card-img-top" alt={ movie.title } />
      //   <div className="card-body">
      //     <h5 className="card-title">{ movie.title }</h5>
      //     <p className="card-text">{ movie.storyline }</p>
      //     <Link
      //       to={ `movies/${movie.id}` }
      //       className="btn btn-primary"
      //     >
      //       VER DETALHES
      //     </Link>
      //   </div>
      // </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
