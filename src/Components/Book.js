import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <>
      <div className="card">
        <div className="img">
          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/150"
            }
            alt={`${book.title} cover`}
          />
        </div>
        <div className="btn">
          <Link to={book.volumeInfo.previewLink}>PREVIEW</Link> |
          <Link to={`/details/${book.id}`}>DETAILS</Link>
        </div>
      </div>
    </>
  );
}

export default Book;
