import {
  Routes,
  Route
} from "react-router-dom";
import {
  LandingPage, 
  PageNotFound,
  AboutPage,
  LoginPage,
  MoviesPage,
  TVShowsPage,
  AnimationsPage,
  SignupPage,
  ForumsPage
} from "./pages";
import './App.css'
import { 
  Footer, 
  NavigationBar
} from "./components";

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path={ "/" } element={ <LandingPage /> } />
        <Route path={ "/about" } element={ <AboutPage /> } />
        <Route path={ "/login" } element={ <LoginPage /> } />
        <Route path={ "/movies" } element={ <MoviesPage /> } />
        <Route path={ "/shows" } element={ <TVShowsPage /> } />
        <Route path={ "/animations" } element={ <AnimationsPage /> } />
        <Route path={ "/signup" } element={ <SignupPage /> } />
        <Route path={ "/forums" } element={ <ForumsPage /> } />
        <Route path={ "*" } element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
