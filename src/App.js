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
    NavigationBar,
    Sidebar,
    SearchBar
} from "./components"


class App extends React.Component {
    render() {
        return ( 
            <div className="app">
                <main className="app-stage grid grid-cols-[250px_1fr_320px]">
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <div>
                            <NavigationBar />
                        </div>
                        <Routes>
                            <Route path={ "/" } element={ <Homepage /> } />
                            <Route path={ "/movies" } element={ <MoviesPage /> } />
                            <Route path={ "/tv-shows" } element={ <TVShowsPage /> } />
                            <Route path={ "/animations" } element={ <AnimationsPage /> } />
                        </Routes>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </main>
                <div>
                    <span className="text-4xl">Footer</span>
                </div>
            </div>
        )
    }
}

export default App