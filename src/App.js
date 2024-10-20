import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAsync } from "./redux/Book/BookSlice";
import Content from "./Components/Content";

function App() {
  const status = useSelector((state) => state.book.status);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getBookAsync("tutunamayanlar"));
    }
  }, [dispatch,status]);

  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
