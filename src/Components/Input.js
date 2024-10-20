import { useDispatch } from "react-redux";
import { getBookAsync } from "../redux/Book/BookSlice";
import { useState } from "react";

function Input() {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getBookAsync(query));
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Input">
        <input
          value={query}
          placeholder="tutunamayanlar..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </div>
    </form>
  );
}

export default Input;
