import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Container from "./Components/container/Container";
import HomePage from "./Components/homepage/HomePage";
import "./App.css";
import PageNotFound from "./Components/pagenotfound/PageNotFound";
import NewsState from "./Contexts/NewsState";
import WatchMore from "./Components/watchmore/WatchMore";
import Alert from "./Components/alert/Alert";

function App() {
  return (
    <NewsState>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route
            path="/*"
            element={
              <Container>
                <PageNotFound />
              </Container>
            }></Route>
          <Route
            exact
            path="/"
            element={
              <Container>
                <HomePage />
              </Container>
            }></Route>
          <Route
            path="/watch-more"
            element={
              <Container>
                <WatchMore />
              </Container>
            }></Route>
          <Route
            path="/nishal"
            element={
              <Container>
                <h1>Hi, my name is Nishal. I am a MERN stack developer.</h1>
              </Container>
            }></Route>
        </Routes>
      </Router>
    </NewsState>
  );
}

export default App;
