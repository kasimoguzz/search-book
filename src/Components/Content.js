import Header from "./Header";
import Books from "./Books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { useSelector } from "react-redux";


function Content() {
    const status = useSelector((state) => state.book.status);
  return (
    <div className="container">
      
        <Header />
        <Router>
        {status === "loading" && <h1>Loading...</h1>}
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Content;
