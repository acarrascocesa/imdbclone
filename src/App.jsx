import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import MovieList from "./components/movieList/movieList";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Movie not found!!!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
