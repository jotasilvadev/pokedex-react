import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokedexPage } from "./pokedexpage";
import { PokemonDetailsPage } from "./pokedetails";

export const AppRouter= () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
            </Routes>
        </Router>
    );
}
