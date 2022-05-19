function Moviedetails(props) {
  return (
    <>
      <h2>{props.details.Title}</h2>
      <div className="box-p-heading">
        <p>Rated: {props.details.Rated}</p>
        <p>Released: {props.details.Released}</p>
        <p>Runtime: {props.details.Runtime}</p>
        <p>Genre: {props.details.Genre}</p>
        <p>Director: {props.details.Director}</p>
        <p>Writer: {props.details.Writer}</p>
        <p>Language: {props.details.Language}</p>
        <p>Country: {props.details.Country}</p>
        <p>Type: {props.details.Type}</p>
      </div>
      <h2>IMDB</h2>
      <div>
        <p>Rating: {props.details.imdbRating}</p>
        <p>Votes: {props.details.imdbVotes}</p>
        <p>ID: {props.details.imdbID}</p>
      </div>
      <p>Actors: {props.details.Actors}</p>
      <p>Plot: {props.details.Plot}</p>
      <h2>Images</h2>
      <div className="">
        <ul>
          <li>
            <img
              className=""
              src={props.details.Images}
              alt={props.details.Title}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Moviedetails;
