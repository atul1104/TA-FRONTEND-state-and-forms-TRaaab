import React from 'react';
import Moviedetails from './Moviedetails';
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      name: '',
    };
  }
  handleClick = (name) => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked,
        name: name,
      };
    });
  };
  render() {
    let moviedetails;
    if (this.state.name !== '') {
      moviedetails = data.find((movie) => movie.Title === this.state.name);
    } else {
      moviedetails = 'Avatar';
    }
    return (
      <>
        <header>
          <h1>Movie List</h1>
        </header>
        <div className="container">
          <ul className="flex cards">
            {data.map((movie, index) => (
              <li key={index} className="card">
                <img src={movie.Images[0]} alt={movie.Title} />
                <div className="card-info">
                  <h2>{movie.Title}</h2>
                  <h3>Released: {movie.Released}</h3>
                  <button onClick={() => this.handleClick(movie.Title)}>
                    More Info
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div
            className={
              this.state.isClicked ? 'view-box absolute' : 'hide-box absolute'
            }
          >
            <span className="box-span" onClick={() => this.handleClick('')}>
              {' '}
              ❌ {''}
            </span>
            <Moviedetails details={moviedetails} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
