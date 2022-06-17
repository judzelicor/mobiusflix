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
    ExplorerPane
} from "./components"


class App extends React.Component {
    render() {
        return ( 
            <div className="app">
                <div className="app-stage h-screen">
                    <main className="h-full grid grid-cols-[250px_1fr_320px]">
                        <div className="h-full">
                            <Sidebar />
                        </div>
                        <div className="h-full">
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
                            <ExplorerPane />
                        </div>
                    </main>
                    <div>
                        <span className="text-4xl">Footer</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

