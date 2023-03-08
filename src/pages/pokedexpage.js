import { Pokedex } from "../components/pokedex/pokedex";
import { PokedexTitle } from "../styled/pokedextitle";
import { PokedexWrapper } from "../styled/pokedexwrapper";
import { PokedexContainer } from "../styled/pokedexcontainer";
import ChangeBackgroundButton from "../components/theme-button/theme-button";

export const PokedexPage = () => {
    return (
        <PokedexWrapper>
            <PokedexContainer>
                <PokedexTitle>Pokédex</PokedexTitle>
                <Pokedex />
                <ChangeBackgroundButton />
            </PokedexContainer>
        </PokedexWrapper>
    );
};


