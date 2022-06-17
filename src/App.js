import React from "react"


import {
    Routes,
    Route
} from "react-router-dom"


import {
    Homepage,
    MoviesPage,
    TVShowsPage,
    AnimationsPage
} from "./pages"


import {
    NavigationBar
} from "./components"


class App extends React.Component {
    render() {
        return ( 
            <div className="app">
                <main className="app-stage">
                    <NavigationBar />
                    <div>
                        <span className="text-4xl">Sidebar</span>
                    </div>
                    <Routes>
                        <Route path={ "/" } element={ <Homepage /> } />
                        <Route path={ "/movies" } element={ <MoviesPage /> } />
                        <Route path={ "/tv-shows" } element={ <TVShowsPage /> } />
                        <Route path={ "/animations" } element={ <AnimationsPage /> } />
                    </Routes>
                    <div>
                        <span className="text-4xl">Explorer Pane</span>
                    </div>
                    <div>
                        <span className="text-4xl">Footer</span>
                    </div>
                </main>
            </div>
        )
    }
}

export default App