import PokemonDetails from "../components/pokemondetails/pokemondetails";
import { Link } from "react-router-dom";
import { PokedexIcon } from "../styled/pokedexicon";

import { PokedexWrapper } from "../styled/pokedexwrapper";
import { PokedexContainer } from "../styled/pokedexcontainer";

export const PokemonDetailsPage = () => {
    return (
        <PokedexWrapper>
            <PokedexContainer>
                <Link to="/">
                    <PokedexIcon src="https://i.ibb.co/MCh7PFN/pokedex.png" alt=""/>
                </Link>
                <PokemonDetails />                
            </PokedexContainer>
        </PokedexWrapper>
    );
};



